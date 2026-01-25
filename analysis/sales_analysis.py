# ==============================
# Sales Performance Analysis - Modern Version
# ==============================

# Required packages:
# pip install pandas matplotlib seaborn openpyxl

import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
import os

# ------------------------------
# Step 1: Load Excel Data
# ------------------------------

# Path to your Excel file
file_path = os.path.join("..", "data", "sales_data.xlsx")
data = pd.read_excel(file_path)

print("\n--- Sales Data Preview ---")
print(data.head())

# ------------------------------
# Step 2: Basic Summary
# ------------------------------

print("\n--- Basic Summary ---")
print(data.describe())

# ------------------------------
# Step 3: Total Revenue by Region
# ------------------------------

region_revenue = data.groupby("Region")["Revenue"].sum().sort_values(ascending=False)
print("\n--- Total Revenue by Region ---")
print(region_revenue)

# ------------------------------
# Step 4: Total Units Sold by Product
# ------------------------------

product_units = data.groupby("Product")["Units Sold"].sum().sort_values(ascending=False)
print("\n--- Total Units Sold by Product ---")
print(product_units)

# ------------------------------
# Step 5: Identify Low Performing Regions
# ------------------------------

avg_revenue = region_revenue.mean()
low_regions = region_revenue[region_revenue < avg_revenue]

print("\n--- Low Performing Regions (Below Average Revenue) ---")
print(low_regions)

# ------------------------------
# Step 6: Save Analysis Summary to Excel (Power BI Ready)
# ------------------------------

output_folder = os.path.join("..", "dashboard")
os.makedirs(output_folder, exist_ok=True)
output_file = os.path.join(output_folder, "analysis_summary.xlsx")

with pd.ExcelWriter(output_file, engine="openpyxl") as writer:
    region_revenue.to_excel(writer, sheet_name="Revenue_by_Region")
    product_units.to_excel(writer, sheet_name="Units_by_Product")
    low_regions.to_excel(writer, sheet_name="Low_Regions")

print(f"\nAnalysis summary saved to {output_file}")

# ------------------------------
# Step 7: Generate Modern Charts
# ------------------------------

sns.set_style("darkgrid")
plt.rcParams['figure.figsize'] = (8,5)

# Chart 1: Revenue by Region
plt.figure()
sns.barplot(x=region_revenue.index, y=region_revenue.values, palette="Greens_d")
plt.title("Revenue by Region")
plt.ylabel("Revenue")
plt.tight_layout()
plt.savefig(os.path.join(output_folder, "revenue_by_region.png"))
plt.show()

# Chart 2: Units Sold by Product
plt.figure()
sns.barplot(x=product_units.index, y=product_units.values, palette="Oranges_d")
plt.title("Units Sold by Product")
plt.ylabel("Units Sold")
plt.tight_layout()
plt.savefig(os.path.join(output_folder, "units_by_product.png"))
plt.show()

# Chart 3: Low Performing Regions
if not low_regions.empty:
    plt.figure()
    sns.barplot(x=low_regions.index, y=low_regions.values, palette="Reds_d")
    plt.title("Low Performing Regions")
    plt.ylabel("Revenue")
    plt.tight_layout()
    plt.savefig(os.path.join(output_folder, "low_regions.png"))
    plt.show()

print("\n--- Modern Sales Analysis Completed Successfully ---")
