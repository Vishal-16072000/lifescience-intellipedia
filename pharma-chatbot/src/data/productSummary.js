
export const productSummaryData = {
    "API Data": {
      description: "Active Pharmaceutical Ingredient information",
      columns: [
        "API Name",
        "CAS Number",
        "Manufacturer",
        "Country",
        "Status",
      ],
      rows: [
        {
          id: 1,
          values: [
            "Paracetamol",
            "103-90-2",
            "ABC Pharma",
            "India",
            "Approved",
          ],
        },
        {
          id: 2,
          values: [
            "Paracetamol",
            "103-90-2",
            "XYZ Chemicals",
            "China",
            "Approved",
          ],
        },
        {
          id: 3,
          values: [
            "Paracetamol",
            "103-90-2",
            "Global Pharma",
            "Germany",
            "Under Review",
          ],
        },
      ],
    },
  
    "FDF Data": {
      description: "Finished Dosage Form information",
      columns: [
        "Product Name",
        "Dosage Form",
        "Strength",
        "Manufacturer",
        "Country",
      ],
      rows: [
        {
          id: 1,
          values: [
            "Paracetamol",
            "Tablet",
            "500 mg",
            "ABC Pharma",
            "India",
          ],
        },
        {
          id: 2,
          values: [
            "Paracetamol",
            "Syrup",
            "250 mg / 5 ml",
            "XYZ Chemicals",
            "China",
          ],
        },
        {
          id: 3,
          values: [
            "Paracetamol",
            "Tablet",
            "650 mg",
            "Global Pharma",
            "Germany",
          ],
        },
      ],
    },
  
    "FDF Combination": {
      description: "Combination product information",
      columns: [
        "Product Name",
        "Active Ingredients",
        "Dosage Form",
        "Strength",
        "Manufacturer",
      ],
      rows: [
        {
          id: 1,
          values: [
            "Paracetamol + Caffeine",
            "Paracetamol, Caffeine",
            "Tablet",
            "500 mg + 30 mg",
            "ABC Pharma",
          ],
        },
        {
          id: 2,
          values: [
            "Paracetamol + Ibuprofen",
            "Paracetamol, Ibuprofen",
            "Tablet",
            "325 mg + 200 mg",
            "XYZ Chemicals",
          ],
        },
      ],
    },
  
    "Commercial Information": {
      description: "Commercial and market-related information",
      columns: [
        "Product Name",
        "Manufacturer",
        "Market",
        "Currency",
        "Reference Price",
      ],
      rows: [
        {
          id: 1,
          values: [
            "Paracetamol 500 mg",
            "ABC Pharma",
            "India",
            "INR",
            "₹25",
          ],
        },
        {
          id: 2,
          values: [
            "Paracetamol 500 mg",
            "XYZ Chemicals",
            "China",
            "USD",
            "$1.20",
          ],
        },
        {
          id: 3,
          values: [
            "Paracetamol 650 mg",
            "Global Pharma",
            "Germany",
            "EUR",
            "€2.50",
          ],
        },
      ],
    },
  };
  