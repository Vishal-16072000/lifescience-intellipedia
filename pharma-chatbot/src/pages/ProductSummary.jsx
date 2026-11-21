
import { useState } from "react";
import {
  Database,
  FileText,
  Layers,
  BriefcaseBusiness,
  Pill,
} from "lucide-react";

import { productSummaryData } from "../data/productSummary";
import SummaryTable from "../components/tables/SummaryTable";

const tabs = [
  {
    name: "API Data",
    icon: Database,
  },
  {
    name: "FDF Data",
    icon: FileText,
  },
  {
    name: "FDF Combination",
    icon: Layers,
  },
  {
    name: "Commercial Information",
    icon: BriefcaseBusiness,
  },
];

function ProductSummary() {
  const [activeTab, setActiveTab] = useState("API Data");

  const currentData = productSummaryData[activeTab];

  return (
    <div className="space-y-6">

      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
            <Pill size={23} />
          </div>

          <div>
            <h1 className="text-2xl font-bold text-slate-900">
              Complete Product Summary
            </h1>

            <p className="text-sm text-slate-500 mt-1">
              Detailed pharmaceutical information and commercial data.
            </p>
          </div>
        </div>
      </div>


      {/* Summary Tabs and Table */}
      <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">

        {/* Tabs */}
        <div className="border-b border-slate-200 px-5 pt-4">
          <div className="flex gap-2 overflow-x-auto">
            {tabs.map(({ name, icon: Icon }) => {
              const isActive = activeTab === name;

              return (
                <button
                  key={name}
                  onClick={() => setActiveTab(name)}
                  className={`flex items-center gap-2 px-4 py-3 text-sm font-medium whitespace-nowrap border-b-2 transition ${
                    isActive
                      ? "border-blue-600 text-blue-600"
                      : "border-transparent text-slate-500 hover:text-slate-800 hover:border-slate-300"
                  }`}
                >
                  <Icon size={17} />
                  {name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Tab Content */}
        <div>
          <div className="p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <h3 className="text-base font-semibold text-slate-900">
                {activeTab}
              </h3>

              <p className="text-sm text-slate-500 mt-1">
                {currentData.description}
              </p>
            </div>

            <span className="text-xs font-medium text-slate-500 bg-slate-100 px-3 py-2 rounded-lg w-fit">
              {currentData.rows.length} Records
            </span>
          </div>

          <div className="border-t border-slate-100">
            <SummaryTable
              columns={currentData.columns}
              rows={currentData.rows}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductSummary;
