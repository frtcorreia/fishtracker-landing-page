import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Fish, BarChart2, Share2, Cloud, MapPin, Scale } from "lucide-react";
import Header from "../components/Header";

export function LandingPage() {
  const { t } = useTranslation();

  const features = [
    {
      icon: Fish,
      titleKey: "landing.features.trackCatches.title",
      descriptionKey: "landing.features.trackCatches.description",
    },
    {
      icon: BarChart2,
      titleKey: "landing.features.analytics.title",
      descriptionKey: "landing.features.analytics.description",
    },
    {
      icon: Share2,
      titleKey: "landing.features.share.title",
      descriptionKey: "landing.features.share.description",
    },
    {
      icon: Cloud,
      titleKey: "landing.features.weather.title",
      descriptionKey: "landing.features.weather.description",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <div className="relative">
          <div className="container mx-auto px-4 pt-24 pb-16">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold text-white mb-6">
                {t("landing.hero.title")}
              </h1>
              <p className="text-xl text-white/90 mb-8">
                {t("landing.hero.subtitle")}
              </p>
              <div className="flex justify-center gap-4">
                <Link
                  to="https://app.fishtracker.pt/auth/signup"
                  className="px-8 py-3 bg-white text-primary hover:bg-gray-100 rounded-lg transition-colors"
                >
                  {t("landing.hero.getStarted")}
                </Link>
                <Link
                  to="https://app.fishtracker.pt/auth/signin"
                  className="px-8 py-3 bg-primary-light hover:bg-primary text-white rounded-lg transition-colors"
                >
                  {t("landing.hero.signIn")}
                </Link>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-1/2 left-10 transform -translate-y-1/2 opacity-10">
            <Fish className="w-48 h-48 text-white" />
          </div>
          <div className="absolute top-1/4 right-10 transform -translate-y-1/2 opacity-10">
            <MapPin className="w-32 h-32 text-white" />
          </div>
          <div className="absolute bottom-10 left-1/4 opacity-10">
            <Scale className="w-24 h-24 text-white" />
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4 py-16">
            <h2 className="text-3xl font-bold text-center text-primary dark:text-white mb-12">
              {t("landing.features.title")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  icon={feature.icon}
                  title={t(feature.titleKey)}
                  description={t(feature.descriptionKey)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-br from-primary to-primary-light py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              {t("landing.cta.title")}
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              {t("landing.cta.subtitle")}
            </p>
            <Link
              to="https://app.fishtracker/auth/signup"
              className="inline-flex items-center px-8 py-3 bg-white text-primary hover:bg-gray-100 rounded-lg transition-colors"
            >
              {t("landing.cta.button")}
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

function FeatureCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    <div className="p-6 bg-gradient-to-br from-gray-50 to-white dark:from-gray-700 dark:to-gray-800 rounded-lg shadow-lg transform hover:-translate-y-1 transition-all duration-200">
      <div className="bg-primary/10 dark:bg-primary-light/10 rounded-lg p-3 inline-block mb-4">
        <Icon className="w-8 h-8 text-primary dark:text-primary-light" />
      </div>
      <h3 className="text-xl font-semibold text-primary dark:text-white mb-2">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
}
