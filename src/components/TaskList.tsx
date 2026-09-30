import React from "react";

function TaskList() {
  const tasks = [
    {
      field: "Programming",
      description: "Finish task FAD",
      dateCreated: "28 Sep 2026",
      dateFinished: "30 Sep 2026",
    },
    {
      field: "Design",
      description: "Complete dashboard UI",
      dateCreated: "27 Sep 2026",
      dateFinished: "29 Sep 2026",
    },
    {
      field: "Research",
      description: "Review project requirements",
      dateCreated: "26 Sep 2026",
      dateFinished: "28 Sep 2026",
    },
    {
      field: "Testing",
      description: "Test authentication flow",
      dateCreated: "25 Sep 2026",
    },
    {
      field: "Documentation",
      description: "Write project documentation",
      dateCreated: "24 Sep 2026",
      dateFinished: "26 Sep 2026",
    },
    {
      field: "Meeting",
      description: "Discuss project progress",
      dateCreated: "23 Sep 2026",
    },
  ];

  const headerStyle =
    "px-6 py-4 text-sm font-semibold text-gray-500 uppercase tracking-wide";
  const bodyStyle = "px-6 py-4 text-sm text-gray-600";

  return (
    <section className="p-4 md:px-8 md:py-6">
      <div className="w-full overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
        <div className="flex items-center justify-between border-b border-gray-100 px-6 py-5">
          <div>
            <h2 className="text-lg font-bold text-gray-800">Recent Tasks</h2>
            <p className="mt-1 text-sm text-gray-500">
              Keep track of your latest tasks and progress.
            </p>
          </div>

          <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
            {tasks.length} Tasks
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left  min-w-[700px] ">
            <thead className="bg-gray-50">
              <tr>
                <th className={headerStyle}>Field</th>
                <th className={headerStyle}>Description</th>
                <th className={headerStyle}>Date Created</th>
                <th className={headerStyle}>Date Finished</th>
              </tr>
            </thead>

            <tbody>
              {tasks.map((task) => (
                <tr
                  key={`${task.field}-${task.description}`}
                  className="border-t border-gray-100 transition-colors hover:bg-green-50/40"
                >
                  {/* <td className="px-6 py-5 font-medium text-gray-800">
                    {task.field}
                  </td> */}
                  <td className={bodyStyle}>
                    <span className="inline-flex rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                      {task.field}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-800">
                    {task.description}
                  </td>
                  <td className={bodyStyle}>{task.dateCreated}</td>
                  <td className={bodyStyle}>{task.dateFinished}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default TaskList;
