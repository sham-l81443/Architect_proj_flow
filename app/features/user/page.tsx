export default function UserFeaturePage() {
  return (
  <div className="space-y-6">
      <section className="p-2">
        <h2 className="text-2xl font-semibold text-black">Authentication</h2>

        <div className="relative mt-6 pl-10">
          <div className="absolute left-4 top-0 bottom-0 w-[1px] bg-gray-400" />

          <div className="space-y-8">
            <div className="relative">
              <div className="absolute -left-[10px] top-1 w-[1px] text-gray-500 text-lg">
                →
              </div>
              <div className="ml-8">
                <h3 className="text-black font-semibold">Create Admin</h3>
                <p className="italic text-black/80 text-sm mt-1">
                  Role-based admin creation UI with permissions and onboarding
                  steps.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-[10px] top-1 text-gray-500 text-lg">
                →
              </div>
              <div className="ml-8">
                <h3 className="text-black font-semibold">Admin Login</h3>
                <p className="italic text-black/80 text-sm mt-1">
                  Secure login flow with optional 2FA and SSO integrations.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-[10px] top-1 text-gray-500 text-lg">
                →
              </div>
              <div className="ml-8">
                <h3 className="text-black font-semibold">Admin Dashboard</h3>
                <p className="italic text-black/80 text-sm mt-1">
                  Control center for users, analytics, settings, and system
                  health.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="p-2">
        <h2 className="text-2xl font-semibold text-black">Project</h2>

        <div className="relative mt-6 pl-10">
          <div className="absolute left-4 top-0 bottom-0 w-[1px] bg-gray-400" />

          <div className="space-y-8">
            <div className="relative">
              <div className="absolute -left-[10px] top-1 w-[1px] text-gray-500 text-lg">
                →
              </div>
              <div className="ml-8">
                <h3 className="text-black font-semibold">Create Project</h3>
                <p className="italic text-black/80 text-sm mt-1">
                  Add new projects with title, description, owner, and timeline
                  settings for easy team coordination.
                </p>

                <div className="mt-3">
                  <img
                    src="/images/project-creation.png"
                    alt="Project creation preview"
                    className="w-full rounded border border-gray-200"
                  />
                  <p className="text-xs italic text-gray-600 mt-2">
                    Illustration: project creation flow
                  </p>
                </div>

                <div className="mt-4 pl-4 border-l border-gray-300">
                  <div className="relative pl-4">
                    <div className="absolute -left-[18px] top-1 w-[1px] text-gray-500 text-lg">
                      →
                    </div>
                    <div className="ml-8">
                      <h4 className="text-black font-semibold">New Project</h4>
                      <p className="italic text-black/80 text-sm mt-1">
                        Add new projects with title, description, owner, and
                        timeline settings for easy team coordination.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pl-4 border-l border-gray-300">
                  <div className="relative pl-4">
                    <div className="absolute -left-[18px] top-1 w-[1px] text-gray-500 text-lg">
                      →
                    </div>
                    <div className="ml-8">
                      <h4 className="text-black font-semibold">
                        Legacy Project
                      </h4>
                      <p className="italic text-black/80 text-sm mt-1">
                        Add new projects with title, description, owner, and
                        timeline settings for easy team coordination.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-[10px] top-1 text-gray-500 text-lg">
                →
              </div>
              <div className="ml-8">
                <h3 className="text-black font-semibold">List Project</h3>
                <p className="italic text-black/80 text-sm mt-1">
                  Browse, search, and manage existing projects with status and
                  progress summaries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
