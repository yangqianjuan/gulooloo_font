// src/app/policy.tsx
import Header from "@/components/Header";

export const revalidate = 604800; // 7 days

export default function Policy() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto]  justify-items-center min-h-screen max-w-[1100px] mx-auto sm:min-w-[1080px]">
      <Header />
      <div className="max-w-3xl mx-auto px-5 py-10 lg:px-6 lg:py-12">
        <div className="text-center mb-15 pb-7.5 border-b border-gray-200">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 mb-2.5">
            Privacy Policy
          </h1>
          <p className="text-lg lg:text-xl text-gray-600 font-normal">
            Your privacy matters to us at Gulooloo Tech
          </p>
        </div>

        <div className="bg-gray-50 px-5 py-3.5 rounded-lg mb-10 text-center text-gray-700 text-sm">
          Last updated: August 1, 2025
        </div>

        <div className="bg-gradient-to-br from-amber-50 to-amber-200 border-l-4 border-amber-500 px-5 py-5 my-6 rounded-md">
          <p className="mb-0 font-semibold text-amber-800">
            BY USING OUR SERVICES, YOU ACKNOWLEDGE THAT YOU HAVE READ AND
            UNDERSTOOD THIS PRIVACY POLICY AND CONSENT TO THE COLLECTION AND USE
            OF YOUR INFORMATION AS DESCRIBED HEREIN.
          </p>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl lg:text-3xl xl:text-4xl font-semibold text-gray-800 mb-5 lg:mb-6 xl:mb-7.5 pb-2 lg:pb-2.5 xl:pb-3 border-b-2 border-teal-500">
            Introduction
          </h2>
          <p className="mb-4 text-gray-700 text-base lg:text-lg xl:text-lg leading-relaxed">
            This Privacy Policy applies to our website at{" "}
            <a
              href="https://guloolootech.com"
              className="text-teal-500 no-underline font-medium hover:underline"
            >
              https://guloolootech.com
            </a>{" "}
            and all mobile applications (&quot;Services&quot;) provided by
            Gulooloo Tech Co., Ltd.(Android) and Gulooloo Tech (iOS), under the
            brand of Gulooloo Tech Co., Limited (&quot;Gulooloo Tech&quot;).
            This policy is incorporated into our app store listings and
            accessible within our applications, in compliance with applicable
            app store requirements and data protection regulations.
          </p>

          <div className="bg-gradient-to-br from-cyan-50 to-cyan-200 border-l-4 border-teal-500 px-5 py-5 my-6 rounded-md">
            <p className="mb-0 font-medium">
              User privacy is our top priority. We (&quot;Gulooloo Tech Co.,
              Limited&quot;, &quot;Gulooloo Tech&quot;, &quot;We&quot;,
              &quot;Us&quot;, or &quot;Our&quot;) are committed to protecting
              your (&quot;User&quot;, &quot;You&quot; or &quot;Your&quot;)
              personal information and maintaining transparency about our data
              practices. We collect and process personal information only when
              necessary to provide you with exceptional services and products.
            </p>
          </div>

          <p className="mb-4 text-gray-700 text-base lg:text-lg xl:text-lg leading-relaxed">
            By accessing or using our services, you acknowledge that you have
            read, understood, and agree to the collection and use of information
            in accordance with this policy. This privacy policy forms an
            integral part of our Terms of Use. If you do not agree to all terms
            and conditions set forth below, please discontinue use of our
            services immediately.
          </p>

          <p className="mb-4 text-gray-700 text-base lg:text-lg xl:text-lg leading-relaxed">
            Should you have any questions regarding this policy or our privacy
            and data protection practices, please do not hesitate to contact us
            using the information provided in the contact section below.
          </p>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl lg:text-3xl xl:text-4xl font-semibold text-gray-800 mb-5 lg:mb-6 xl:mb-7.5 pb-2 lg:pb-2.5 xl:pb-3 border-b-2 border-teal-500">
            Who We Are
          </h2>
          <p className="mb-4 text-gray-700 text-base lg:text-lg xl:text-lg leading-relaxed">
            Gulooloo Tech Co., Limited, as named in the app&apos;s Google Play
            and App Store listing, is committed to protecting your personal
            information and using it appropriately. We operate as a responsible
            data controller, ensuring compliance with international privacy
            standards including GDPR, CCPA, and other applicable data protection
            regulations.
          </p>

          <div className="bg-gradient-to-br from-cyan-50 to-cyan-200 border-l-4 border-teal-500 px-5 py-5 my-6 rounded-md">
            <p className="mb-0 font-medium">
              As a technology company focused on productivity and health
              applications, we understand the sensitive nature of the data we
              may handle and are committed to the highest standards of data
              protection and user privacy.
            </p>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl lg:text-3xl xl:text-4xl font-semibold text-gray-800 mb-5 lg:mb-6 xl:mb-7.5 pb-2 lg:pb-2.5 xl:pb-3 border-b-2 border-teal-500">
            What Information We Collect
          </h2>
          <p className="mb-4 text-gray-700 text-base lg:text-lg xl:text-lg leading-relaxed">
            We practice data minimization and collect only the information
            necessary to provide and improve our services. Generally, we do not
            collect Personal Information during normal use of our applications
            or websites. Personal Information may only be accessed when you
            voluntarily contact us via email for feedback, suggestions, or issue
            reporting.
          </p>

          <h3 className="text-xl lg:text-2xl font-semibold text-gray-700 mt-7.5 lg:mt-8.5 xl:mt-10 mb-3.5 lg:mb-4.5 xl:mb-5">
            Personal Information
          </h3>
          <p className="mb-4 text-gray-700 text-base lg:text-lg xl:text-lg leading-relaxed">
            Personal Information refers to any data that can identify a living
            individual, including but not limited to:
          </p>
          <ul className="my-4 pl-6">
            <li className="mb-2.5 text-gray-700 leading-normal">
              Name and contact details (email address, telephone number)
            </li>
            <li className="mb-2.5 text-gray-700 leading-normal">
              Physical address and geographic location data
            </li>
            <li className="mb-2.5 text-gray-700 leading-normal">
              User-generated content in communications with us
            </li>
            <li className="mb-2.5 text-gray-700 leading-normal">
              Account credentials and authentication information
            </li>
            <li className="mb-2.5 text-gray-700 leading-normal">
              Any other identifiable information you voluntarily provide
            </li>
          </ul>

          <h3 className="text-xl lg:text-2xl font-semibold text-gray-700 mt-7.5 lg:mt-8.5 xl:mt-10 mb-3.5 lg:mb-4.5 xl:mb-5">
            Non-Personal Information
          </h3>
          <p className="mb-4 text-gray-700 text-base lg:text-lg xl:text-lg leading-relaxed">
            Non-Personal Information consists of data that cannot be used to
            identify a specific individual. This information is automatically
            collected during service usage and includes:
          </p>
          <ul className="my-4 pl-6">
            <li className="mb-2.5 text-gray-700 leading-normal">
              Browser type, version, and device specifications
            </li>
            <li className="mb-2.5 text-gray-700 leading-normal">
              Operating system and application version information
            </li>
            <li className="mb-2.5 text-gray-700 leading-normal">
              Pages visited, session duration, and user interaction patterns
            </li>
            <li className="mb-2.5 text-gray-700 leading-normal">
              Device identifiers and system diagnostic data
            </li>
            <li className="mb-2.5 text-gray-700 leading-normal">
              Aggregated usage statistics and performance metrics
            </li>
            <li className="mb-2.5 text-gray-700 leading-normal">
              Network information and IP addresses (anonymized)
            </li>
            <li className="mb-2.5 text-gray-700 leading-normal">
              Crash reports and error logs (anonymized)
            </li>
            <li className="mb-2.5 text-gray-700 leading-normal">
              Feature usage analytics and user behavior patterns
            </li>
          </ul>

          <h3 className="text-xl lg:text-2xl font-semibold text-gray-700 mt-7.5 lg:mt-8.5 xl:mt-10 mb-3.5 lg:mb-4.5 xl:mb-5">
            Health Data (GoFasting App)
          </h3>
          <p className="mb-4 text-gray-700 text-base lg:text-lg xl:text-lg leading-relaxed">
            Our GoFasting application may collect health-related information
            with your explicit consent, including:
          </p>
          <ul className="my-4 pl-6">
            <li className="mb-2.5 text-gray-700 leading-normal">
              Biometric data: Weight, height, BMI calculations
            </li>
            <li className="mb-2.5 text-gray-700 leading-normal">
              Activity metrics: Steps taken, distance traveled, calories burned
            </li>
            <li className="mb-2.5 text-gray-700 leading-normal">
              Physiological data: Heart rate, sleep patterns (where applicable)
            </li>
            <li className="mb-2.5 text-gray-700 leading-normal">
              Fasting schedules and nutrition tracking data
            </li>
            <li className="mb-2.5 text-gray-700 leading-normal">
              Water intake and meal timing information
            </li>
            <li className="mb-2.5 text-gray-700 leading-normal">
              Custom health goals and preferences
            </li>
          </ul>

          <div className="bg-gradient-to-br from-cyan-50 to-cyan-200 border-l-4 border-teal-500 px-5 py-5 my-6 rounded-md">
            <p className="mb-0 font-medium">
              IMPORTANT: We integrate with third-party health platforms (Apple
              HealthKit, Google Fit) only with your explicit authorization. All
              health data remains under your control and is processed in
              accordance with applicable health data protection regulations
              including HIPAA where applicable.
            </p>
          </div>

          <p className="mb-4 text-gray-700 text-base lg:text-lg xl:text-lg leading-relaxed">
            Health data is particularly sensitive, and we implement additional
            security measures to protect this information. You may revoke access
            to health data at any time through your device settings.
          </p>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl lg:text-3xl xl:text-4xl font-semibold text-gray-800 mb-5 lg:mb-6 xl:mb-7.5 pb-2 lg:pb-2.5 xl:pb-3 border-b-2 border-teal-500">
            How We Use Your Information
          </h2>
          <p className="mb-4 text-gray-700 text-base lg:text-lg xl:text-lg leading-relaxed">
            We process your information lawfully, fairly, and transparently
            based on legitimate interests, contractual necessity, or your
            explicit consent. Personal Information is strictly protected and
            used solely for the following purposes:
          </p>

          <h3 className="text-xl lg:text-2xl font-semibold text-gray-700 mt-7.5 lg:mt-8.5 xl:mt-10 mb-3.5 lg:mb-4.5 xl:mb-5">
            Primary Uses
          </h3>
          <ul className="my-4 pl-6">
            <li className="mb-2.5 text-gray-700 leading-normal">
              Responding to your inquiries, feedback, and support requests
            </li>
            <li className="mb-2.5 text-gray-700 leading-normal">
              Improving our services based on user suggestions
            </li>
            <li className="mb-2.5 text-gray-700 leading-normal">
              Ensuring compliance with legal obligations
            </li>
            <li className="mb-2.5 text-gray-700 leading-normal">
              Preventing fraud and maintaining service security
            </li>
            <li className="mb-2.5 text-gray-700 leading-normal">
              Providing customer support and technical assistance
            </li>
            <li className="mb-2.5 text-gray-700 leading-normal">
              Delivering requested features and functionality
            </li>
          </ul>

          <div className="bg-gradient-to-br from-cyan-50 to-cyan-200 border-l-4 border-teal-500 px-5 py-5 my-6 rounded-md">
            <p className="mb-0 font-medium">
              We never sell, rent, or share your Personal Information with third
              parties for marketing purposes. Your data remains confidential and
              is processed only as outlined in this policy.
            </p>
          </div>

          <h3 className="text-xl lg:text-2xl font-semibold text-gray-700 mt-7.5 lg:mt-8.5 xl:mt-10 mb-3.5 lg:mb-4.5 xl:mb-5">
            Analytics and Improvement
          </h3>
          <p className="mb-4 text-gray-700 text-base lg:text-lg xl:text-lg leading-relaxed">
            Non-Personal Information is aggregated and analyzed to:
          </p>
          <ul className="my-4 pl-6">
            <li className="mb-2.5 text-gray-700 leading-normal">
              Enhance user experience and service functionality
            </li>
            <li className="mb-2.5 text-gray-700 leading-normal">
              Conduct statistical analysis and performance optimization
            </li>
            <li className="mb-2.5 text-gray-700 leading-normal">
              Identify usage patterns and popular features
            </li>
            <li className="mb-2.5 text-gray-700 leading-normal">
              Make informed decisions about product development
            </li>
            <li className="mb-2.5 text-gray-700 leading-normal">
              Ensure service reliability and technical performance
            </li>
            <li className="mb-2.5 text-gray-700 leading-normal">
              Detect and prevent technical issues
            </li>
            <li className="mb-2.5 text-gray-700 leading-normal">
              Optimize app performance and loading times
            </li>
          </ul>

          <p className="mb-4 text-gray-700 text-base lg:text-lg xl:text-lg leading-relaxed">
            All aggregated data is anonymized and cannot be traced back to
            individual users. We employ advanced anonymization techniques to
            ensure your privacy is maintained even in aggregate data analysis.
          </p>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl lg:text-3xl xl:text-4xl font-semibold text-gray-800 mb-5 lg:mb-6 xl:mb-7.5 pb-2 lg:pb-2.5 xl:pb-3 border-b-2 border-teal-500">
            Data Retention
          </h2>
          <p className="mb-4 text-gray-700 text-base lg:text-lg xl:text-lg leading-relaxed">
            We implement a comprehensive data retention policy that balances
            business needs with privacy protection:
          </p>

          <h3 className="text-xl lg:text-2xl font-semibold text-gray-700 mt-7.5 lg:mt-8.5 xl:mt-10 mb-3.5 lg:mb-4.5 xl:mb-5">
            Personal Information
          </h3>
          <p className="mb-4 text-gray-700 text-base lg:text-lg xl:text-lg leading-relaxed">
            We do not collect or store your Personal Information during normal
            app usage. If you voluntarily send us an email or contact us
            directly, we will retain your email address and related
            communication for the time necessary to respond to your inquiry and
            resolve any follow-up issues, typically no longer than 2 years
            unless required by law.
          </p>

          <h3 className="text-xl lg:text-2xl font-semibold text-gray-700 mt-7.5 lg:mt-8.5 xl:mt-10 mb-3.5 lg:mb-4.5 xl:mb-5">
            Non-Personal Information
          </h3>
          <p className="mb-4 text-gray-700 text-base lg:text-lg xl:text-lg leading-relaxed">
            We retain Non-Personal Information for internal analysis purposes
            for up to 3 years, except when this data is used to strengthen
            security or improve functionality, in which case it may be retained
            longer in aggregated, anonymized form.
          </p>

          <h3 className="text-xl lg:text-2xl font-semibold text-gray-700 mt-7.5 lg:mt-8.5 xl:mt-10 mb-3.5 lg:mb-4.5 xl:mb-5">
            Health Data
          </h3>
          <p className="mb-4 text-gray-700 text-base lg:text-lg xl:text-lg leading-relaxed">
            Health data is stored locally on your device and in your personal
            cloud storage (if you choose to enable cloud sync). We do not store
            health data on our servers except for temporary processing required
            for app functionality.
          </p>

          <div className="bg-gradient-to-br from-cyan-50 to-cyan-200 border-l-4 border-teal-500 px-5 py-5 my-6 rounded-md">
            <p className="mb-0 font-medium">
              You can request deletion of any personal data we hold about you at
              any time by contacting us. We will respond to such requests within
              30 days in accordance with applicable data protection laws.
            </p>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl lg:text-3xl xl:text-4xl font-semibold text-gray-800 mb-5 lg:mb-6 xl:mb-7.5 pb-2 lg:pb-2.5 xl:pb-3 border-b-2 border-teal-500">
            Third-Party Services
          </h2>
          <p className="mb-4 text-gray-700 text-base lg:text-lg xl:text-lg leading-relaxed">
            We carefully select third-party service providers and ensure they
            meet our privacy and security standards. All third-party
            integrations are governed by strict data processing agreements:
          </p>

          <h3 className="text-xl lg:text-2xl font-semibold text-gray-700 mt-7.5 lg:mt-8.5 xl:mt-10 mb-3.5 lg:mb-4.5 xl:mb-5">
            Payment Processing
          </h3>
          <p className="mb-4 text-gray-700 text-base lg:text-lg xl:text-lg leading-relaxed">
            Payment information is processed directly by platform providers and
            never stored on our servers:
          </p>
          <ul className="my-4 pl-6">
            <li className="mb-2.5 text-gray-700 leading-normal">
              <a
                href="https://www.apple.com/legal/privacy/"
                className="text-teal-500 no-underline font-medium hover:underline"
              >
                Apple Store In-App Payments
              </a>{" "}
              - Handles iOS purchases
            </li>
            <li className="mb-2.5 text-gray-700 leading-normal">
              <a
                href="https://policies.google.com/privacy"
                className="text-teal-500 no-underline font-medium hover:underline"
              >
                Google Play In-App Payments
              </a>{" "}
              - Handles Android purchases
            </li>
          </ul>

          <h3 className="text-xl lg:text-2xl font-semibold text-gray-700 mt-7.5 lg:mt-8.5 xl:mt-10 mb-3.5 lg:mb-4.5 xl:mb-5">
            Advertising Partners
          </h3>
          <p className="mb-4 text-gray-700 text-base lg:text-lg xl:text-lg leading-relaxed">
            We work with advertising partners to provide relevant ads and
            support our free services. These partners may collect limited,
            non-personal information:
          </p>
          <ul className="my-4 pl-6">
            <li className="mb-2.5 text-gray-700 leading-normal">
              <a
                href="https://policies.google.com/privacy"
                className="text-teal-500 no-underline font-medium hover:underline"
              >
                AdMob from Google
              </a>{" "}
              - Primary advertising platform
            </li>
            <li className="mb-2.5 text-gray-700 leading-normal">
              <a
                href="https://www.facebook.com/about/privacy/"
                className="text-teal-500 no-underline font-medium hover:underline"
              >
                Facebook Audience Network
              </a>{" "}
              - Social media advertising
            </li>
            <li className="mb-2.5 text-gray-700 leading-normal">
              <a
                href="https://www.applovin.com/privacy/"
                className="text-teal-500 no-underline font-medium hover:underline"
              >
                AppLovin
              </a>{" "}
              - Mobile advertising platform
            </li>
            <li className="mb-2.5 text-gray-700 leading-normal">
              <a
                href="https://pubmatic.com/legal/privacy/"
                className="text-teal-500 no-underline font-medium hover:underline"
              >
                PubMatic
              </a>{" "}
              - Programmatic advertising
            </li>
            <li className="mb-2.5 text-gray-700 leading-normal">
              <a
                href="https://www.pangleglobal.com/privacy"
                className="text-teal-500 no-underline font-medium hover:underline"
              >
                Pangle
              </a>{" "}
              - International advertising network
            </li>
            <li className="mb-2.5 text-gray-700 leading-normal">
              <a
                href="https://www.digitalturbine.com/legal/privacy-policy"
                className="text-teal-500 no-underline font-medium hover:underline"
              >
                Digital Turbine
              </a>{" "}
              - App discovery platform
            </li>
            <li className="mb-2.5 text-gray-700 leading-normal">
              <a
                href="https://verve.com/product-privacy-policies"
                className="text-teal-500 no-underline font-medium hover:underline"
              >
                Verve
              </a>{" "}
              - Mobile advertising solutions
            </li>
          </ul>

          <h3 className="text-xl lg:text-2xl font-semibold text-gray-700 mt-7.5 lg:mt-8.5 xl:mt-10 mb-3.5 lg:mb-4.5 xl:mb-5">
            Analytics Services
          </h3>
          <p className="mb-4 text-gray-700 text-base lg:text-lg xl:text-lg leading-relaxed">
            We use analytics to understand app performance and user behavior
            (anonymized):
          </p>
          <ul className="my-4 pl-6">
            <li className="mb-2.5 text-gray-700 leading-normal">
              <a
                href="https://www.facebook.com/about/privacy/"
                className="text-teal-500 no-underline font-medium hover:underline"
              >
                Facebook Analytics
              </a>{" "}
              - User engagement analytics
            </li>
            <li className="mb-2.5 text-gray-700 leading-normal">
              <a
                href="https://policies.google.com/privacy"
                className="text-teal-500 no-underline font-medium hover:underline"
              >
                Firebase and Google Analytics
              </a>{" "}
              - App performance and usage analytics
            </li>
          </ul>

          <h3 className="text-xl lg:text-2xl font-semibold text-gray-700 mt-7.5 lg:mt-8.5 xl:mt-10 mb-3.5 lg:mb-4.5 xl:mb-5">
            Cloud Storage Integration
          </h3>
          <p className="mb-4 text-gray-700 text-base lg:text-lg xl:text-lg leading-relaxed">
            Optional cloud storage for data backup and sync (user-controlled):
          </p>
          <ul className="my-4 pl-6">
            <li className="mb-2.5 text-gray-700 leading-normal">
              <a
                href="https://www.apple.com/legal/internet-services/icloud/"
                className="text-teal-500 no-underline font-medium hover:underline"
              >
                iCloud from Apple
              </a>{" "}
              - iOS device backup and sync
            </li>
            <li className="mb-2.5 text-gray-700 leading-normal">
              <a
                href="https://policies.google.com/privacy"
                className="text-teal-500 no-underline font-medium hover:underline"
              >
                Google Drive
              </a>{" "}
              - Android device backup and sync
            </li>
          </ul>

          <div className="bg-gradient-to-br from-amber-50 to-amber-200 border-l-4 border-amber-500 px-5 py-5 my-6 rounded-md">
            <p className="mb-4 text-gray-700 text-base lg:text-lg xl:text-lg leading-relaxed">
              You can opt-out of advertising tracking through your device
              settings. We respect Do Not Track signals and similar privacy
              preferences.
            </p>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl lg:text-3xl xl:text-4xl font-semibold text-gray-800 mb-5 lg:mb-6 xl:mb-7.5 pb-2 lg:pb-2.5 xl:pb-3 border-b-2 border-teal-500">
            Security
          </h2>
          <p className="mb-4 text-gray-700 text-base lg:text-lg xl:text-lg leading-relaxed">
            We implement industry-standard security measures to protect your
            information, including:
          </p>
          <ul className="my-4 pl-6">
            <li className="mb-2.5 text-gray-700 leading-normal">
              Encryption in transit using TLS 1.3 or higher
            </li>
            <li className="mb-2.5 text-gray-700 leading-normal">
              Encryption at rest for any stored data
            </li>
            <li className="mb-2.5 text-gray-700 leading-normal">
              Regular security audits and vulnerability assessments
            </li>
            <li className="mb-2.5 text-gray-700 leading-normal">
              Access controls and authentication measures
            </li>
            <li className="mb-2.5 text-gray-700 leading-normal">
              Staff training on data protection and privacy
            </li>
            <li className="mb-2.5 text-gray-700 leading-normal">
              Incident response procedures for potential breaches
            </li>
          </ul>

          <div className="bg-gradient-to-br from-cyan-50 to-cyan-200 border-l-4 border-teal-500 px-5 py-5 my-6 rounded-md">
            <p className="mb-4 text-gray-700 text-base lg:text-lg xl:text-lg leading-relaxed">
              IMPORTANT: While we strive to use commercially acceptable means of
              protecting your information, no method of transmission over the
              internet or electronic storage is 100% secure. We cannot guarantee
              absolute security, but we are committed to promptly addressing any
              security concerns.
            </p>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl lg:text-3xl xl:text-4xl font-semibold text-gray-800 mb-5 lg:mb-6 xl:mb-7.5 pb-2 lg:pb-2.5 xl:pb-3 border-b-2 border-teal-500">
            Your Rights
          </h2>
          <p className="mb-4 text-gray-700 text-base lg:text-lg xl:text-lg leading-relaxed">
            We respect your privacy rights and provide you with comprehensive
            control over your data:
          </p>

          <h3 className="text-xl lg:text-2xl font-semibold text-gray-700 mt-7.5 lg:mt-8.5 xl:mt-10 mb-3.5 lg:mb-4.5 xl:mb-5">
            Universal Rights
          </h3>
          <ul className="my-4 pl-6">
            <li className="mb-2.5 text-gray-700 leading-normal">
              <strong>Right to Information:</strong> You can request information
              about what data we collect and how it&apos;s used
            </li>
            <li className="mb-2.5 text-gray-700 leading-normal">
              <strong>Right of Access:</strong> You can request a copy of your
              personal data
            </li>
            <li className="mb-2.5 text-gray-700 leading-normal">
              <strong>Right to Rectification:</strong> You can request
              correction of inaccurate personal data
            </li>
            <li className="mb-2.5 text-gray-700 leading-normal">
              <strong>Right to Erasure:</strong> You can request deletion of
              your personal data
            </li>
            <li className="mb-2.5 text-gray-700 leading-normal">
              <strong>Right to Control:</strong> You can decide whether to use
              our services and control app permissions
            </li>
          </ul>

          <h3 className="text-xl lg:text-2xl font-semibold text-gray-700 mt-7.5 lg:mt-8.5 xl:mt-10 mb-3.5 lg:mb-4.5 xl:mb-5">
            EU/EEA Residents (GDPR)
          </h3>
          <p className="mb-4 text-gray-700 text-base lg:text-lg xl:text-lg leading-relaxed">
            If you are located in the European Union or European Economic Area,
            you have additional rights under the General Data Protection
            Regulation (GDPR):
          </p>
          <ul className="my-4 pl-6">
            <li className="mb-2.5 text-gray-700 leading-normal">
              Right to data portability
            </li>
            <li className="mb-2.5 text-gray-700 leading-normal">
              Right to restrict processing
            </li>
            <li className="mb-2.5 text-gray-700 leading-normal">
              Right to object to processing
            </li>
            <li className="mb-2.5 text-gray-700 leading-normal">
              Right to lodge a complaint with a supervisory authority
            </li>
          </ul>

          <h3 className="text-xl lg:text-2xl font-semibold text-gray-700 mt-7.5 lg:mt-8.5 xl:mt-10 mb-3.5 lg:mb-4.5 xl:mb-5">
            California Residents (CCPA)
          </h3>
          <p className="mb-4 text-gray-700 text-base lg:text-lg xl:text-lg leading-relaxed">
            California residents have specific rights under the California
            Consumer Privacy Act (CCPA):
          </p>
          <ul className="my-4 pl-6">
            <li className="mb-2.5 text-gray-700 leading-normal">
              Right to know what personal information is collected
            </li>
            <li className="mb-2.5 text-gray-700 leading-normal">
              Right to delete personal information
            </li>
            <li className="mb-2.5 text-gray-700 leading-normal">
              Right to opt-out of the sale of personal information
            </li>
            <li className="mb-2.5 text-gray-700 leading-normal">
              Right to non-discrimination for exercising privacy rights
            </li>
          </ul>

          <div className="bg-gradient-to-br from-cyan-50 to-cyan-200 border-l-4 border-teal-500 px-5 py-5 my-6 rounded-md">
            <p className="mb-4 text-gray-700 text-base lg:text-lg xl:text-lg leading-relaxed">
              To exercise any of these rights, please contact us using the
              information provided below. We will respond to your request within
              the timeframe required by applicable law.
            </p>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl lg:text-3xl xl:text-4xl font-semibold text-gray-800 mb-5 lg:mb-6 xl:mb-7.5 pb-2 lg:pb-2.5 xl:pb-3 border-b-2 border-teal-500">
            Children&apos;s Privacy
          </h2>
          <p className="mb-4 text-gray-700 text-base lg:text-lg xl:text-lg leading-relaxed">
            We are committed to protecting children&apos;s privacy and comply
            with applicable children&apos;s privacy laws:
          </p>
          <ul className="my-4 pl-6">
            <li className="mb-2.5 text-gray-700 leading-normal">
              Our Services are not intended for use by children under the age of
              13
            </li>
            <li className="mb-2.5 text-gray-700 leading-normal">
              We do not knowingly collect personal information from children
              under 13
            </li>
            <li className="mb-2.5 text-gray-700 leading-normal">
              If we discover we have collected information from a child under
              13, we will delete it immediately
            </li>
            <li className="mb-2.5 text-gray-700 leading-normal">
              We encourage parents and guardians to monitor their
              children&apos;s online activities
            </li>
            <li className="mb-2.5 text-gray-700 leading-normal">
              Parents can contact us to review, delete, or stop further
              collection of their child&apos;s information
            </li>
          </ul>

          <div className="bg-gradient-to-br from-cyan-50 to-cyan-200 border-l-4 border-teal-500 px-5 py-5 my-6 rounded-md">
            <p className="mb-4 text-gray-700 text-base lg:text-lg xl:text-lg leading-relaxed">
              If you believe we have collected information from a child under
              13, please contact us immediately at the email address provided
              below.
            </p>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl lg:text-3xl xl:text-4xl font-semibold text-gray-800 mb-5 lg:mb-6 xl:mb-7.5 pb-2 lg:pb-2.5 xl:pb-3 border-b-2 border-teal-500">
            International Data Transfers
          </h2>
          <p className="mb-4 text-gray-700 text-base lg:text-lg xl:text-lg leading-relaxed">
            As a global service, your information may be transferred to and
            processed in countries other than your own. We ensure appropriate
            safeguards are in place:
          </p>
          <ul className="my-4 pl-6">
            <li className="mb-2.5 text-gray-700 leading-normal">
              We primarily process data within your region when possible
            </li>
            <li className="mb-2.5 text-gray-700 leading-normal">
              International transfers are protected by adequate safeguards such
              as Standard Contractual Clauses
            </li>
            <li className="mb-2.5 text-gray-700 leading-normal">
              We ensure all processors meet equivalent privacy protection
              standards
            </li>
            <li className="mb-2.5 text-gray-700 leading-normal">
              You have the right to obtain information about transfer safeguards
            </li>
          </ul>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl lg:text-3xl xl:text-4xl font-semibold text-gray-800 mb-5 lg:mb-6 xl:mb-7.5 pb-2 lg:pb-2.5 xl:pb-3 border-b-2 border-teal-500">
            Changes to This Privacy Policy
          </h2>
          <p className="mb-4 text-gray-700 text-base lg:text-lg xl:text-lg leading-relaxed">
            We may update our Privacy Policy from time to time to reflect
            changes in our practices, technology, legal requirements, or other
            factors. When we make changes:
          </p>
          <ul className="my-4 pl-6">
            <li className="mb-2.5 text-gray-700 leading-normal">
              We will post the updated policy on this page with a new &quot;Last
              Updated&quot; date
            </li>
            <li className="mb-2.5 text-gray-700 leading-normal">
              For significant changes, we will provide prominent notice through
              our app or email
            </li>
            <li className="mb-2.5 text-gray-700 leading-normal">
              We encourage you to review this policy periodically
            </li>
            <li className="mb-2.5 text-gray-700 leading-normal">
              Continued use of our services after changes constitutes acceptance
              of the updated policy
            </li>
          </ul>

          <div className="bg-gradient-to-br from-cyan-50 to-cyan-200 border-l-4 border-teal-500 px-5 py-5 my-6 rounded-md">
            <p className="mb-4 text-gray-700 text-base lg:text-lg xl:text-lg leading-relaxed">
              We maintain a record of previous versions of our Privacy Policy.
              If you would like to review a previous version, please contact us.
            </p>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl lg:text-3xl xl:text-4xl font-semibold text-gray-800 mb-5 lg:mb-6 xl:mb-7.5 pb-2 lg:pb-2.5 xl:pb-3 border-b-2 border-teal-500">
            Contact Information
          </h2>
          <p className="mb-4 text-gray-700 text-base lg:text-lg xl:text-lg leading-relaxed">
            If you have any questions, concerns, or requests regarding this
            Privacy Policy or our data practices, please contact us:
          </p>
          <ul className="my-4 pl-6">
            <li className="mb-2.5 text-gray-700 leading-normal">
              <strong>Email:</strong> support@guloolootech.com
            </li>
            <li className="mb-2.5 text-gray-700 leading-normal">
              <strong>Response Time:</strong> We aim to respond within 48 hours
            </li>
            <li className="mb-2.5 text-gray-700 leading-normal">
              <strong>Data Protection Officer:</strong> Available upon request
              for GDPR-related inquiries
            </li>
            <li className="mb-2.5 text-gray-700 leading-normal">
              <strong>Business Hours:</strong> Monday to Friday, 9:00 AM - 6:00
              PM (UTC+8)
            </li>
          </ul>
        </div>

        <div className="bg-gray-50 px-7.5 py-12.5 rounded-lg text-center mt-17.5">
          <h3 className="text-gray-800 mb-6 text-xl">
            Questions About This Policy?
          </h3>
          <p className="mb-7.5 text-lg text-gray-700">
            For any questions or suggestions regarding our Privacy Policy,
            please contact us:
          </p>
          <a
            href="mailto:support@guloolootech.com"
            className="inline-block bg-teal-500 text-white px-6 py-3 no-underline rounded-full font-medium transition-colors duration-300 hover:bg-teal-600"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}
