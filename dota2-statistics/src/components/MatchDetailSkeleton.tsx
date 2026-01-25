export default function MatchDetailSkeleton() {
  return (
    <div className="animate-pulse">

      {/* ================= Winner Section ================= */}
      <div className="w-[90%] mx-auto bg-background pt-9">
        <div className="flex gap-2 items-center">
          <div className="w-10 h-10 bg-gray-700 rounded" />
          <div className="h-5 w-48 bg-gray-700 rounded" />
        </div>

        <div className="mt-9 flex justify-between md:justify-start gap-5">
          <div className="h-5 w-56 bg-gray-700 rounded" />
          <div className="h-5 w-40 bg-gray-700 rounded" />
        </div>

        <div className="flex justify-between items-center mt-9 max-w-[600px] mx-auto">
          <div className="flex gap-5 items-center">
            <div className="flex flex-col items-center gap-1">
              <div className="w-10 h-10 bg-gray-700 rounded" />
              <div className="h-4 w-24 bg-gray-700 rounded" />
            </div>
            <div className="h-6 w-8 bg-gray-700 rounded" />
          </div>

          <div className="h-6 w-10 bg-gray-700 rounded" />

          <div className="flex gap-5 items-center">
            <div className="h-6 w-8 bg-gray-700 rounded" />
            <div className="flex flex-col items-center gap-1">
              <div className="w-10 h-10 bg-gray-700 rounded" />
              <div className="h-4 w-24 bg-gray-700 rounded" />
            </div>
          </div>
        </div>
      </div>

      {/* ================= Status Buttons ================= */}
      <div className="mt-9 w-[90%] max-w-[1000px] mx-auto flex border-2 border-text rounded-md">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="w-[20%] py-1 px-2"
          >
            <div className="h-6 w-full bg-gray-700 rounded" />
          </div>
        ))}
      </div>

      {/* ================= Overview Tables ================= */}
      <div className="w-[90%] mx-auto mt-9 pb-5">

        {/* -------- Radiant -------- */}
        <div>
          <div className="flex gap-2 items-center">
            <div className="w-10 h-10 bg-gray-700 rounded" />
            <div className="h-5 w-32 bg-gray-700 rounded" />
          </div>

          <div className="overflow-x-auto relative mt-5">
            <table className="min-w-max w-full border-collapse">
              <thead>
                <tr className="bg-[#3D3D43]">
                  <th className="py-1 sticky left-0 z-20 min-w-[220px] bg-[#3d3d43]">
                    <div className="h-4 w-24 bg-gray-600 rounded mx-auto" />
                  </th>
                  {Array.from({ length: 8 }).map((_, i) => (
                    <th key={i} className="py-1 min-w-[90px]">
                      <div className="h-4 w-16 bg-gray-600 rounded mx-auto" />
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {Array.from({ length: 5 }).map((_, row) => (
                  <tr key={row}>
                    <td className="py-1 sticky left-0 z-10 min-w-[220px]">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-gray-700 rounded" />
                        <div className="h-4 w-32 bg-gray-700 rounded" />
                      </div>
                    </td>

                    {Array.from({ length: 8 }).map((_, col) => (
                      <td key={col} className="py-1 min-w-[90px]">
                        <div className="h-4 w-10 bg-gray-700 rounded mx-auto" />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* -------- Dire -------- */}
        <div className="mt-9">
          <div className="flex gap-2 items-center">
            <div className="w-10 h-10 bg-gray-700 rounded" />
            <div className="h-5 w-32 bg-gray-700 rounded" />
          </div>

          <div className="overflow-x-auto relative mt-5">
            <table className="min-w-max w-full border-collapse">
              <thead>
                <tr className="bg-[#3D3D43]">
                  <th className="py-1 sticky left-0 z-20 min-w-[220px] bg-[#3d3d43]">
                    <div className="h-4 w-24 bg-gray-600 rounded mx-auto" />
                  </th>
                  {Array.from({ length: 8 }).map((_, i) => (
                    <th key={i} className="py-1 min-w-[90px]">
                      <div className="h-4 w-16 bg-gray-600 rounded mx-auto" />
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {Array.from({ length: 5 }).map((_, row) => (
                  <tr key={row}>
                    <td className="py-1 sticky left-0 z-10 min-w-[220px]">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-gray-700 rounded" />
                        <div className="h-4 w-32 bg-gray-700 rounded" />
                      </div>
                    </td>

                    {Array.from({ length: 8 }).map((_, col) => (
                      <td key={col} className="py-1 min-w-[90px]">
                        <div className="h-4 w-10 bg-gray-700 rounded mx-auto" />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  )
}
