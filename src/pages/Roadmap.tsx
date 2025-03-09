import { useTranslation } from "react-i18next";
import { CheckCircle2, Clock, GitPullRequest, Rocket } from "lucide-react";
import Header from "../components/Header";

export function Roadmap() {
  const { t } = useTranslation();
  const features = [
    {
      title: t("roadmap.sections.current"),
      status: "current",
      items: [
        { name: t("roadmap.features.catchTracking"), done: true },
        { name: t("roadmap.features.weatherIntegration"), done: true },
        { name: t("roadmap.features.locationMapping"), done: true },
        { name: t("roadmap.features.basicAnalytics"), done: true },
      ],
    },
    {
      title: t("roadmap.sections.upcoming"),
      status: "upcoming",
      items: [
        { name: t("roadmap.features.socialFeatures"), done: false },
        { name: t("roadmap.features.advancedAnalytics"), done: false },
        { name: t("roadmap.features.mobileApp"), done: false },
      ],
    },
    {
      title: t("roadmap.sections.planned"),
      status: "planned",
      items: [
        { name: t("roadmap.features.aiFishRecognition"), done: false },
        { name: t("roadmap.features.tournamentIntegration"), done: false },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      <main className="pt-16">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
              <div className="text-center mb-12">
                <Rocket className="w-16 h-16 text-primary mx-auto mb-4" />
                <h1 className="text-3xl font-bold text-primary dark:text-white mb-4">
                  {t("roadmap.welcome")}
                </h1>
                <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  {t("roadmap.description")}
                </p>
              </div>

              <div className="space-y-12">
                {features.map((section) => (
                  <div key={section.status} className="relative">
                    <div className="flex items-center mb-4">
                      {section.status === "current" ? (
                        <Clock className="w-6 h-6 text-primary-light mr-2" />
                      ) : section.status === "upcoming" ? (
                        <GitPullRequest className="w-6 h-6 text-primary-light mr-2" />
                      ) : (
                        <Rocket className="w-6 h-6 text-primary-light mr-2" />
                      )}
                      <h2 className="text-xl font-semibold text-primary dark:text-white">
                        {section.title}
                      </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {section.items.map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg"
                        >
                          {item.done ? (
                            <CheckCircle2 className="w-5 h-5 text-green-500 mr-3" />
                          ) : (
                            <div className="w-5 h-5 rounded-full border-2 border-gray-300 dark:border-gray-600 mr-3" />
                          )}
                          <span
                            className={`${
                              item.done
                                ? "text-gray-900 dark:text-white"
                                : "text-gray-600 dark:text-gray-300"
                            }`}
                          >
                            {item.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 p-6 bg-primary/5 dark:bg-primary/10 rounded-lg">
                <h3 className="text-lg font-semibold text-primary dark:text-white mb-2">
                  {t("roadmap.whatNext.title")}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {t("roadmap.whatNext.description")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
