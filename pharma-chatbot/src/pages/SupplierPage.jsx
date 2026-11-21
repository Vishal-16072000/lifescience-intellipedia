
import { useMemo, useState } from "react";
import {
  Search,
  Building2,
  Filter,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";

import { suppliers } from "../data/suppliers";

function SupplierPage() {
  const [search, setSearch] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  // Get unique countries from supplier data
  const countries = [
    "All",
    ...new Set(suppliers.map((supplier) => supplier.country)),
  ];

  // Search and country filtering
  const filteredSuppliers = useMemo(() => {
    return suppliers.filter((supplier) => {
      const matchesSearch = [
        supplier.company,
        supplier.country,
        supplier.type,
      ].some((value) =>
        value.toLowerCase().includes(search.toLowerCase().trim())
      );

      const matchesCountry =
        selectedCountry === "All" ||
        supplier.country === selectedCountry;

      return matchesSearch && matchesCountry;
    });
  }, [search, selectedCountry]);

  // Pagination calculations
  const totalPages = Math.ceil(filteredSuppliers.length / pageSize);

  const startIndex = (currentPage - 1) * pageSize;

  const paginatedSuppliers = filteredSuppliers.slice(
    startIndex,
    startIndex + pageSize
  );

  const handleSearch = (value) => {
    setSearch(value);
    setCurrentPage(1);
  };

  const handleCountryChange = (value) => {
    setSelectedCountry(value);
    setCurrentPage(1);
  };

  const clearFilters = () => {
    setSearch("");
    setSelectedCountry("All");
    setCurrentPage(1);
  };

  const hasActiveFilters =
    search.trim() !== "" || selectedCountry !== "All";

  return (
    <div className="space-y-6">

      {/* Page Header */}
      <div>
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
            <Building2 size={23} />
          </div>

          <div>
            <h1 className="text-2xl font-bold text-slate-900">
              Supplier Data
            </h1>

            <p className="text-sm text-slate-500 mt-1">
              Explore pharmaceutical suppliers and manufacturers.
            </p>
          </div>
        </div>
      </div>


      {/* Main Table Card */}
      <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">

        {/* Table Toolbar */}
        <div className="p-5 border-b border-slate-100">
          <div className="flex flex-col lg:flex-row gap-3 lg:items-center lg:justify-between">

            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                type="text"
                value={search}
                onChange={(e) => handleSearch(e.target.value)}
                placeholder="Search company, country or type..."
                className="w-full pl-10 pr-4 py-2.5 text-sm border border-slate-200 rounded-lg outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            {/* Country Filter */}
            <div className="flex items-center gap-2">
              <Filter size={17} className="text-slate-500" />

              <select
                value={selectedCountry}
                onChange={(e) => handleCountryChange(e.target.value)}
                className="border border-slate-200 rounded-lg px-3 py-2.5 text-sm text-slate-700 bg-white outline-none focus:border-blue-500"
              >
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country === "All" ? "All Countries" : country}
                  </option>
                ))}
              </select>

              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800"
                >
                  <X size={15} />
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Company
                </th>

                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Country
                </th>

                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Type
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100">
              {paginatedSuppliers.length > 0 ? (
                paginatedSuppliers.map((supplier) => (
                  <tr
                    key={supplier.id}
                    className="hover:bg-slate-50 transition"
                  >
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                          <Building2 size={17} />
                        </div>

                        <span className="font-medium text-sm text-slate-800">
                          {supplier.company}
                        </span>
                      </div>
                    </td>

                    <td className="px-6 py-5 text-sm text-slate-600">
                      {supplier.country}
                    </td>

                    <td className="px-6 py-5">
                      <span
                        className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
                          supplier.type === "Manufacturer"
                            ? "bg-blue-50 text-blue-700"
                            : "bg-emerald-50 text-emerald-700"
                        }`}
                      >
                        {supplier.type}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" className="px-6 py-16 text-center">
                    <Search
                      size={28}
                      className="mx-auto text-slate-300 mb-3"
                    />

                    <p className="font-medium text-slate-700">
                      No suppliers found
                    </p>

                    <p className="text-sm text-slate-400 mt-1">
                      Try changing your search or country filter.
                    </p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="px-5 py-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">

          <div className="flex items-center gap-2 text-sm text-slate-500">
            <span>Rows per page</span>

            <select
              value={pageSize}
              onChange={(e) => {
                setPageSize(Number(e.target.value));
                setCurrentPage(1);
              }}
              className="border border-slate-200 rounded-md px-2 py-1.5 bg-white outline-none"
            >
              <option value={2}>2</option>
              <option value={5}>5</option>
              <option value={10}>10</option>
            </select>

            <span className="ml-2">
              {filteredSuppliers.length === 0
                ? "0 records"
                : `${startIndex + 1}-${Math.min(
                    startIndex + pageSize,
                    filteredSuppliers.length
                  )} of ${filteredSuppliers.length}`}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() =>
                setCurrentPage((page) => Math.max(1, page - 1))
              }
              disabled={currentPage === 1}
              className="w-9 h-9 flex items-center justify-center border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed"
              aria-label="Previous page"
            >
              <ChevronLeft size={18} />
            </button>

            <span className="text-sm text-slate-600 px-2">
              Page {totalPages === 0 ? 0 : currentPage} of {totalPages}
            </span>

            <button
              onClick={() =>
                setCurrentPage((page) =>
                  Math.min(totalPages, page + 1)
                )
              }
              disabled={currentPage >= totalPages}
              className="w-9 h-9 flex items-center justify-center border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed"
              aria-label="Next page"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default SupplierPage;
