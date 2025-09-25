// src/app/service.tsx
import ScrollToTopButton from "@/components/ScrollToTopButton/page";
import Header from "@/components/Header";

export const revalidate = 604800; // 7 days

export default function Terms() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto]  justify-items-center min-h-screen max-w-[1280px] mx-auto sm:min-w-[1080px]">
      <Header />
      <div className="max-w-3xl mx-auto px-5 py-10 lg:px-6 lg:py-12">
        <div className="text-center mb-15 pb-7.5 border-b border-gray-200">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 mb-2.5">
            Terms of Service
          </h1>
          <p className="text-lg lg:text-xl text-gray-600 font-normal">
            Legal agreement for using Gulooloo Tech services
          </p>
        </div>

        <div className="bg-gray-50 px-5 py-3.5 rounded-lg mb-10 text-center text-gray-700 text-sm">
          Last updated: August 1, 2025
        </div>

        <div className="bg-gradient-to-br from-amber-50 to-amber-200 border-l-4 border-amber-500 px-5 py-5 my-6 rounded-md">
          <p className="mb-0 font-semibold text-amber-800">
            PLEASE READ THESE TERMS OF USE CAREFULLY. IF YOU DO NOT AGREE WITH
            (OR CANNOT COMPLY WITH) THE AGREEMENT, THEN YOU SHOULD NOT USE THE
            SERVICE.
          </p>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl lg:text-3xl xl:text-4xl font-semibold text-gray-800 mb-5 lg:mb-6 xl:mb-7.5 pb-2 lg:pb-2.5 xl:pb-3 border-b-2 border-teal-500">
            Welcome
          </h2>
          <p className="mb-4 text-gray-700 text-base lg:text-lg xl:text-lg leading-relaxed">
            Welcome to the website at{" "}
            <a href="https://guloolootech.com" className="external-link">
              https://guloolootech.com
            </a>{" "}
            and all mobile applications (collectively, the &quot;Service&quot;)
            operated by Gulooloo Tech Co., Limited (&quot;Gulooloo Tech&quot;,
            &quot;Company&quot;, &quot;We&quot;, &quot;Us&quot;, or
            &quot;Our&quot;).
          </p>

          <p className="mb-4 text-gray-700 text-base lg:text-lg xl:text-lg leading-relaxed">
            This Terms of Use Agreement (&quot;Terms&quot; or
            &quot;Agreement&quot;), including all policies, guidelines, and
            additional terms expressly incorporated by reference, constitutes a
            legally binding contract between you and Gulooloo Tech Co., Limited.
          </p>

          <div className="bg-gradient-to-br from-cyan-50 to-cyan-200 border-l-4 border-teal-500 px-5 py-5 my-6 rounded-md">
            <p className="mb-4 text-gray-700 text-base lg:text-lg xl:text-lg leading-relaxed">
              By accessing, downloading, installing, or using our services in
              any manner, you acknowledge that you have read, understood, and
              agree to be bound by this Agreement and our Privacy Policy,
              regardless of whether you register for an account or make a
              purchase.
            </p>
          </div>

          <p className="mb-4 text-gray-700 text-base lg:text-lg xl:text-lg leading-relaxed">
            This Agreement governs your relationship with Gulooloo Tech and
            applies to all visitors, users, subscribers, and other individuals
            or entities who access or use the Service.
          </p>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl lg:text-3xl xl:text-4xl font-semibold text-gray-800 mb-5 lg:mb-6 xl:mb-7.5 pb-2 lg:pb-2.5 xl:pb-3 border-b-2 border-teal-500">
            Our Service
          </h2>
          <p className="mb-4 text-gray-700 text-base lg:text-lg xl:text-lg leading-relaxed">
            Gulooloo Tech operates digital platforms including websites and
            mobile applications designed to enhance productivity, health, and
            daily life management. Detailed descriptions of our service
            offerings are available on our website and individual application
            pages within their respective app stores.
          </p>

          <h3 className="text-xl lg:text-2xl font-semibold text-gray-700 mt-7.5 lg:mt-8.5 xl:mt-10 mb-3.5 lg:mb-4.5 xl:mb-5">
            Service Categories
          </h3>
          <ul className="my-4 pl-6">
            <li className="mb-2.5 text-gray-700 leading-normal">
              <strong>Free Service:</strong> Core functionalities provided at no
              cost to users, supported by advertising and optional premium
              features
            </li>
            <li className="mb-2.5 text-gray-700 leading-normal">
              <strong>Premium Service:</strong> Advanced features and ad-free
              experiences available through subscription or one-time purchases
            </li>
            <li className="mb-2.5 text-gray-700 leading-normal">
              <strong>Promotional Offerings:</strong> Limited-time special
              plans, memberships, or bundled services, including potential
              third-party integrations
            </li>
          </ul>

          <div className="bg-gradient-to-br from-cyan-50 to-cyan-200 border-l-4 border-teal-500 px-5 py-5 my-6 rounded-md">
            <p className="mb-4 text-gray-700 text-base lg:text-lg xl:text-lg leading-relaxed">
              We reserve the right to modify, enhance, discontinue, or introduce
              new service offerings, subscription plans, and promotional
              features at any time, with or without notice, in accordance with
              these Terms and applicable laws.
            </p>
          </div>

          <p className="mb-4 text-gray-700 text-base lg:text-lg xl:text-lg leading-relaxed">
            We are not responsible for third-party products or services that may
            be offered in conjunction with our Service. All third-party
            offerings are subject to their respective terms and conditions.
          </p>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl lg:text-3xl xl:text-4xl font-semibold text-gray-800 mb-5 lg:mb-6 xl:mb-7.5 pb-2 lg:pb-2.5 xl:pb-3 border-b-2 border-teal-500">
            Intellectual Property Rights
          </h2>
          <p className="mb-4 text-gray-700 text-base lg:text-lg xl:text-lg leading-relaxed">
            All content, features, and functionality of the Gulooloo Tech
            Service, including but not limited to text, graphics, logos, images,
            audio clips, video content, software code, user interfaces, and
            underlying technology (collectively, &quot;Gulooloo Tech
            Content&quot;), are owned by Gulooloo Tech Co., Limited and our
            licensors.
          </p>

          <div className="bg-gradient-to-br from-cyan-50 to-cyan-200 border-l-4 border-teal-500 px-5 py-5 my-6 rounded-md">
            <p className="mb-4 text-gray-700 text-base lg:text-lg xl:text-lg leading-relaxed">
              Our Content is protected by United States and international
              copyright, trademark, patent, trade secret, and other intellectual
              property laws. Gulooloo Tech and our licensors retain all right,
              title, and interest in and to the Gulooloo Tech Content.
            </p>
          </div>

          <p className="mb-4 text-gray-700 text-base lg:text-lg xl:text-lg leading-relaxed">
            We do not transfer any ownership rights in our Content or Service to
            you. Any use of Gulooloo Tech Content in connection with any product
            or service requires our express prior written consent. Unauthorized
            use of our intellectual property may result in legal action and
            damages.
          </p>

          <h3 className="text-xl lg:text-2xl font-semibold text-gray-700 mt-7.5 lg:mt-8.5 xl:mt-10 mb-3.5 lg:mb-4.5 xl:mb-5">
            Trademark Notice
          </h3>
          <p className="mb-4 text-gray-700 text-base lg:text-lg xl:text-lg leading-relaxed">
            Gulooloo Tech, our logos, and other proprietary marks are trademarks
            or registered trademarks of Gulooloo Tech Co., Limited. Third-party
            trademarks, service marks, and logos used in connection with our
            Service are the property of their respective owners.
          </p>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl lg:text-3xl xl:text-4xl font-semibold text-gray-800 mb-5 lg:mb-6 xl:mb-7.5 pb-2 lg:pb-2.5 xl:pb-3 border-b-2 border-teal-500">
            Eligibility
          </h2>
          <p className="mb-4 text-gray-700 text-base lg:text-lg xl:text-lg leading-relaxed">
            You may use the Service only if you can form a binding contract with
            us, and only in compliance with this Agreement and all applicable
            laws, rules, and regulations.
          </p>

          <h3 className="text-xl lg:text-2xl font-semibold text-gray-700 mt-7.5 lg:mt-8.5 xl:mt-10 mb-3.5 lg:mb-4.5 xl:mb-5">
            Children&apos;s Use
          </h3>
          <p className="mb-4 text-gray-700 text-base lg:text-lg xl:text-lg leading-relaxed">
            Children under the age of 13 years old are not permitted to use or
            access the Service unless their use is directly authorized by their
            parent or guardian or another authorized adult who agrees to be
            bound by this Agreement.
          </p>

          <p className="mb-4 text-gray-700 text-base lg:text-lg xl:text-lg leading-relaxed">
            Any use or access to the Service by a child who is not directly
            supervised by an adult is strictly prohibited and in violation of
            this Agreement.
          </p>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl lg:text-3xl xl:text-4xl font-semibold text-gray-800 mb-5 lg:mb-6 xl:mb-7.5 pb-2 lg:pb-2.5 xl:pb-3 border-b-2 border-teal-500">
            License Conditions
          </h2>
          <p className="mb-4 text-gray-700 text-base lg:text-lg xl:text-lg leading-relaxed">
            Subject to the terms and conditions of these Terms, we grant you
            limited, non-exclusive, non-transferable, non-sublicensable,
            revocable permission to:
          </p>
          <ul className="my-4 pl-6">
            <li className="mb-2.5 text-gray-700 leading-normal">
              Make use of the Gulooloo Tech Service
            </li>
            <li className="mb-2.5 text-gray-700 leading-normal">
              Make personal, non-commercial use of the Content
            </li>
          </ul>

          <div className="bg-gradient-to-br from-cyan-50 to-cyan-200 border-l-4 border-teal-500 px-5 py-5 my-6 rounded-md">
            <p className="mb-4 text-gray-700 text-base lg:text-lg xl:text-lg leading-relaxed">
              Our Service and Content are not sold or transferred to you. We and
              our licensors retain ownership of all copies of the Service and
              Content even after installation on your devices.
            </p>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl lg:text-3xl xl:text-4xl font-semibold text-gray-800 mb-5 lg:mb-6 xl:mb-7.5 pb-2 lg:pb-2.5 xl:pb-3 border-b-2 border-teal-500">
            Your Content
          </h2>
          <p className="mb-4 text-gray-700 text-base lg:text-lg xl:text-lg leading-relaxed">
            By accessing or using the Gulooloo Tech Service, you agree that you
            will not use our Service to create, upload, download, copy, publish
            or propagate any content that:
          </p>
          <ul className="my-4 pl-6">
            <li className="mb-2.5 text-gray-700 leading-normal">
              Violates any rule, law, regulation, or policy
            </li>
            <li className="mb-2.5 text-gray-700 leading-normal">
              Harms national interests or endangers national security
            </li>
            <li className="mb-2.5 text-gray-700 leading-normal">
              Incites ethnic or racial discrimination or hatred
            </li>
            <li className="mb-2.5 text-gray-700 leading-normal">
              Undermines social stability
            </li>
            <li className="mb-2.5 text-gray-700 leading-normal">
              Contains obscenity, pornography, gambling, violence, or terror
            </li>
            <li className="mb-2.5 text-gray-700 leading-normal">
              Insults or defames others or infringes others&apos; rights
            </li>
            <li className="mb-2.5 text-gray-700 leading-normal">
              Contains abusive or threatening information
            </li>
          </ul>

          <h3 className="text-xl lg:text-2xl font-semibold text-gray-700 mt-7.5 lg:mt-8.5 xl:mt-10 mb-3.5 lg:mb-4.5 xl:mb-5">
            Content License
          </h3>
          <p className="mb-4 text-gray-700 text-base lg:text-lg xl:text-lg leading-relaxed">
            You hereby grant us a worldwide, non-exclusive, irrevocable,
            royalty-free, fully-paid, perpetual, sublicensable, fully
            transferable license to use, distribute, reproduce, create
            derivative works from, publish, translate, publicly perform and
            publicly display any Content that you upload, share or publish to
            our Services.
          </p>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl lg:text-3xl xl:text-4xl font-semibold text-gray-800 mb-5 lg:mb-6 xl:mb-7.5 pb-2 lg:pb-2.5 xl:pb-3 border-b-2 border-teal-500">
            Prohibited Uses
          </h2>
          <p className="mb-4 text-gray-700 text-base lg:text-lg xl:text-lg leading-relaxed">
            You may use Gulooloo Tech Service only for lawful purposes. You
            agree that you shall not:
          </p>
          <ol className="my-4 pl-6">
            <li className="mb-2.5 text-gray-700 leading-normal">
              Use our Service for any unlawful purpose
            </li>
            <li className="mb-2.5 text-gray-700 leading-normal">
              Violate or infringe other people&apos;s intellectual property or
              privacy rights
            </li>
            <li className="mb-2.5 text-gray-700 leading-normal">
              Share any illegal, abusive, harassing, or offensive content
            </li>
            <li className="mb-2.5 text-gray-700 leading-normal">
              Transmit any viruses or harmful computer instructions
            </li>
            <li className="mb-2.5 text-gray-700 leading-normal">
              Attempt to circumvent any technological measures
            </li>
            <li className="mb-2.5 text-gray-700 leading-normal">
              Interfere with or destroy the integrity of the service
            </li>
            <li className="mb-2.5 text-gray-700 leading-normal">
              Sublicense, sell, resell, or commercially exploit the Services
            </li>
            <li className="mb-2.5 text-gray-700 leading-normal">
              Use any automated means to access our Services without permission
            </li>
            <li className="mb-2.5 text-gray-700 leading-normal">
              Introduce malicious software
            </li>
            <li className="mb-2.5 text-gray-700 leading-normal">
              Copy any ideas, features, functions or graphics of the Services
            </li>
            <li className="mb-2.5 text-gray-700 leading-normal">
              Claim to be a representative or agent of the Services
            </li>
            <li className="mb-2.5 text-gray-700 leading-normal">
              Otherwise interfere with the proper working of the Service
            </li>
          </ol>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl lg:text-3xl xl:text-4xl font-semibold text-gray-800 mb-5 lg:mb-6 xl:mb-7.5 pb-2 lg:pb-2.5 xl:pb-3 border-b-2 border-teal-500">
            GoFasting Google API Usage
          </h2>
          <p className="mb-4 text-gray-700 text-base lg:text-lg xl:text-lg leading-relaxed">
            For GoFasting on Google Play, we use Google APIs to read your data
            and present it through a better visual and interactive experience.
            Your steps, heart rate, and distance walked are data provided by the
            Google Fit app.
          </p>

          <div className="bg-gradient-to-br from-cyan-50 to-cyan-200 border-l-4 border-teal-500 px-5 py-5 my-6 rounded-md">
            <p className="mb-4 text-gray-700 text-base lg:text-lg xl:text-lg leading-relaxed">
              We do not store your data in other storage spaces. We only use the
              content that needs to be presented in the application. All API
              usage specifications comply with{" "}
              <a
                href="https://developers.google.com/terms/api-services-user-data-policy"
                className="text-teal-500 no-underline font-medium hover:underline"
              >
                Google API usage specifications
              </a>
              .
            </p>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl lg:text-3xl xl:text-4xl font-semibold text-gray-800 mb-5 lg:mb-6 xl:mb-7.5 pb-2 lg:pb-2.5 xl:pb-3 border-b-2 border-teal-500">
            Payments
          </h2>
          <p className="mb-4 text-gray-700 text-base lg:text-lg xl:text-lg leading-relaxed">
            Certain options of Gulooloo Service require payment through the App
            Store, Google Play Store, or carrier billing before you can access
            them. If you choose to use the Paid Service, you agree to the
            pricing and payment methods listed in the Service.
          </p>

          <h3 className="text-xl lg:text-2xl font-semibold text-gray-700 mt-7.5 lg:mt-8.5 xl:mt-10 mb-3.5 lg:mb-4.5 xl:mb-5">
            Free Trials
          </h3>
          <p className="mb-4 text-gray-700 text-base lg:text-lg xl:text-lg leading-relaxed">
            We offer free trials for certain paid subscription types. At the end
            of your free trial period, we will charge the relevant subscription
            fee unless you cancel your subscription prior.
          </p>

          <h3 className="text-xl lg:text-2xl font-semibold text-gray-700 mt-7.5 lg:mt-8.5 xl:mt-10 mb-3.5 lg:mb-4.5 xl:mb-5">
            Auto-Recurring Subscriptions
          </h3>
          <p className="mb-4 text-gray-700 text-base lg:text-lg xl:text-lg leading-relaxed">
            If you purchase an auto-recurring periodic subscription, your
            Payment Method will continue to be billed until you cancel. You can
            cancel the subscription at any time following the instructions of
            the Payment Method.
          </p>

          <div className="bg-gradient-to-br from-cyan-50 to-cyan-200 border-l-4 border-teal-500 px-5 py-5 my-6 rounded-md">
            <p className="mb-4 text-gray-700 text-base lg:text-lg xl:text-lg leading-relaxed">
              IMPORTANT: You may cancel your use of Service at any time;
              however, there are no refunds for cancellation.
            </p>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl lg:text-3xl xl:text-4xl font-semibold text-gray-800 mb-5 lg:mb-6 xl:mb-7.5 pb-2 lg:pb-2.5 xl:pb-3 border-b-2 border-teal-500">
            Communications
          </h2>
          <p className="mb-4 text-gray-700 text-base lg:text-lg xl:text-lg leading-relaxed">
            You agree to receive communications from us electronically, by
            email, application messages, etc., and consent that such
            notifications satisfy any legal requirement for communication in
            writing.
          </p>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl lg:text-3xl xl:text-4xl font-semibold text-gray-800 mb-5 lg:mb-6 xl:mb-7.5 pb-2 lg:pb-2.5 xl:pb-3 border-b-2 border-teal-500">
            Third-Party Services
          </h2>
          <p className="mb-4 text-gray-700 text-base lg:text-lg xl:text-lg leading-relaxed">
            Our Services may include advertisements and promotions provided by
            third parties and links to other websites or resources. We are not
            responsible for the availability of such external websites or
            resources.
          </p>

          <p className="mb-4 text-gray-700 text-base lg:text-lg xl:text-lg leading-relaxed">
            If you choose to interact with third parties through our Services,
            the Terms of such third parties will govern their relationship with
            you. We are not responsible for the terms or actions of such third
            parties.
          </p>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl lg:text-3xl xl:text-4xl font-semibold text-gray-800 mb-5 lg:mb-6 xl:mb-7.5 pb-2 lg:pb-2.5 xl:pb-3 border-b-2 border-teal-500">
            Apple App Store Terms
          </h2>
          <p className="mb-4 text-gray-700 text-base lg:text-lg xl:text-lg leading-relaxed">
            If you have downloaded our application from the Apple App Store or
            are using the App on an iOS device, please note:
          </p>
          <ul className="my-4 pl-6">
            <li className="mb-2.5 text-gray-700 leading-normal">
              These Terms are concluded between you and Gulooloo Tech, not with
              Apple
            </li>
            <li className="mb-2.5 text-gray-700 leading-normal">
              Apple is not responsible for the Services and the content thereof
            </li>
            <li className="mb-2.5 text-gray-700 leading-normal">
              Apple has no obligation to furnish any maintenance or support
              services
            </li>
            <li className="mb-2.5 text-gray-700 leading-normal">
              Apple is not responsible for addressing any claims relating to the
              Service
            </li>
            <li className="mb-2.5 text-gray-700 leading-normal">
              Apple and its subsidiaries are third-party beneficiaries of these
              Terms
            </li>
          </ul>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl lg:text-3xl xl:text-4xl font-semibold text-gray-800 mb-5 lg:mb-6 xl:mb-7.5 pb-2 lg:pb-2.5 xl:pb-3 border-b-2 border-teal-500">
            Disclaimer of Warranty
          </h2>
          <div className="bg-gradient-to-br from-cyan-50 to-cyan-200 border-l-4 border-teal-500 px-5 py-5 my-6 rounded-md">
            <p className="mb-4 text-gray-700 text-base lg:text-lg xl:text-lg leading-relaxed">
              THE GULOOLOO TECH SERVICE IS PROVIDED &quot;AS IS&quot; AND
              &quot;AS AVAILABLE,&quot; WITHOUT EXPRESS OR IMPLIED WARRANTY OR
              CONDITION OF ANY KIND.
            </p>
          </div>

          <p className="mb-4 text-gray-700 text-base lg:text-lg xl:text-lg leading-relaxed">
            Gulooloo Tech and all owners of the Content make no representations
            and disclaim any warranties or conditions of satisfactory quality,
            merchantability, fitness for a particular purpose, or
            non-infringement.
          </p>

          <p className="mb-4 text-gray-700 text-base lg:text-lg xl:text-lg leading-relaxed">
            Neither Gulooloo Tech nor any owner of Content warrants that the
            Gulooloo Tech Service is free of malware or other harmful
            components. We make no representation nor do we warrant, endorse,
            guarantee, or assume responsibility for any third-party
            applications, user content, devices or any other product or service.
          </p>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl lg:text-3xl xl:text-4xl font-semibold text-gray-800 mb-5 lg:mb-6 xl:mb-7.5 pb-2 lg:pb-2.5 xl:pb-3 border-b-2 border-teal-500">
            Limitation of Liability
          </h2>
          <div className="bg-gradient-to-br from-cyan-50 to-cyan-200 border-l-4 border-teal-500 px-5 py-5 my-6 rounded-md">
            <p className="mb-4 text-gray-700 text-base lg:text-lg xl:text-lg leading-relaxed">
              TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT
              WILL GULOOLOO TECH BE LIABLE FOR ANY INDIRECT, CONSEQUENTIAL,
              EXEMPLARY, INCIDENTAL, SPECIAL, PUNITIVE, OR ENHANCED DAMAGES.
            </p>
          </div>

          <p className="mb-4 text-gray-700 text-base lg:text-lg xl:text-lg leading-relaxed">
            This includes, without limitation, loss of profits, whether incurred
            directly or indirectly, or any loss of data, use, goodwill, or other
            intangible losses, resulting from:
          </p>
          <ul className="my-4 pl-6">
            <li className="mb-2.5 text-gray-700 leading-normal">
              Your access to or use of or inability to access or use the Service
            </li>
            <li className="mb-2.5 text-gray-700 leading-normal">
              The conduct or content of other members or third parties on the
              Service
            </li>
            <li className="mb-2.5 text-gray-700 leading-normal">
              Unauthorized access, use or alteration of your content
            </li>
          </ul>

          <p className="mb-4 text-gray-700 text-base lg:text-lg xl:text-lg leading-relaxed">
            In no event will Gulooloo Tech&apos;s aggregate liability to you for
            all claims relating to the Service exceed the amount paid, if any,
            by you to us for the Service.
          </p>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl lg:text-3xl xl:text-4xl font-semibold text-gray-800 mb-5 lg:mb-6 xl:mb-7.5 pb-2 lg:pb-2.5 xl:pb-3 border-b-2 border-teal-500">
            Indemnification
          </h2>
          <p className="mb-4 text-gray-700 text-base lg:text-lg xl:text-lg leading-relaxed">
            You agree to defend, indemnify and hold Gulooloo Tech and its
            affiliates, directors, officers, employees, contractors, and agents
            harmless from and against any claims, liabilities, damages, losses,
            and expenses arising out of or in any way connected with:
          </p>
          <ul className="my-4 pl-6">
            <li className="mb-2.5 text-gray-700 leading-normal">
              Your Content or your access to or use of our Services
            </li>
            <li className="mb-2.5 text-gray-700 leading-normal">
              Your breach or alleged breach of these Terms
            </li>
            <li className="mb-2.5 text-gray-700 leading-normal">
              Your violation of any third-party right
            </li>
            <li className="mb-2.5 text-gray-700 leading-normal">
              Your violation of any laws, rules, regulations, or orders
            </li>
            <li className="mb-2.5 text-gray-700 leading-normal">
              Any misrepresentation made by you
            </li>
          </ul>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl lg:text-3xl xl:text-4xl font-semibold text-gray-800 mb-5 lg:mb-6 xl:mb-7.5 pb-2 lg:pb-2.5 xl:pb-3 border-b-2 border-teal-500">
            Changes to Service and Termination
          </h2>
          <p className="mb-4 text-gray-700 text-base lg:text-lg xl:text-lg leading-relaxed">
            We are always striving to improve the Service and bring you
            additional functionality. This means we may add new product features
            or enhancements from time to time as well as remove some features.
          </p>

          <p className="mb-4 text-gray-700 text-base lg:text-lg xl:text-lg leading-relaxed">
            We reserve the right to withdraw or amend our Service, and any
            service or material we provide via Service, in our sole discretion
            without notice.
          </p>

          <h3 className="text-xl lg:text-2xl font-semibold text-gray-700 mt-7.5 lg:mt-8.5 xl:mt-10 mb-3.5 lg:mb-4.5 xl:mb-5">
            Termination
          </h3>
          <ul className="my-4 pl-6">
            <li className="mb-2.5 text-gray-700 leading-normal">
              You may terminate the Service by not using it, for any reason
            </li>
            <li className="mb-2.5 text-gray-700 leading-normal">
              If you use a third-party payment account, you will need to manage
              in-app purchases through such account
            </li>
            <li className="mb-2.5 text-gray-700 leading-normal">
              We may terminate your use at any time without notice if we believe
              you have violated this Agreement
            </li>
            <li className="mb-2.5 text-gray-700 leading-normal">
              Upon termination, you will not be entitled to any refund for
              purchases
            </li>
          </ul>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl lg:text-3xl xl:text-4xl font-semibold text-gray-800 mb-5 lg:mb-6 xl:mb-7.5 pb-2 lg:pb-2.5 xl:pb-3 border-b-2 border-teal-500">
            Changes to These Terms
          </h2>
          <p className="mb-4 text-gray-700 text-base lg:text-lg xl:text-lg leading-relaxed">
            We may make changes to the Terms from time to time. The most recent
            version is the version that applies to your use of the services.
          </p>

          <p className="mb-4 text-gray-700 text-base lg:text-lg xl:text-lg leading-relaxed">
            Although we may include a notice in our service that the Terms have
            been modified, such notice may not remain in place for any extended
            period of time. Accordingly, you should review the Terms posted in
            our service from time to time.
          </p>

          <div className="bg-gradient-to-br from-cyan-50 to-cyan-200 border-l-4 border-teal-500 px-5 py-5 my-6 rounded-md">
            <p className="mb-4 text-gray-700 text-base lg:text-lg xl:text-lg leading-relaxed">
              Any continued use and access to the services after any updates to
              these Terms are published means that you voluntarily agree to be
              bound by the updated Terms.
            </p>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl lg:text-3xl xl:text-4xl font-semibold text-gray-800 mb-5 lg:mb-6 xl:mb-7.5 pb-2 lg:pb-2.5 xl:pb-3 border-b-2 border-teal-500">
            Waiver and Severability
          </h2>
          <p className="mb-4 text-gray-700 text-base lg:text-lg xl:text-lg leading-relaxed">
            No waiver of any term of this Agreement shall be deemed a further or
            continuing waiver of such term or any other term, and Gulooloo
            Tech&apos;s failure to assert any right or provision under this
            Agreement shall not constitute a waiver of such right or provision.
          </p>

          <p className="mb-4 text-gray-700 text-base lg:text-lg xl:text-lg leading-relaxed">
            If any provision of Terms is held by a court to be invalid, illegal,
            or unenforceable for any reason, such provision shall be eliminated
            or limited to the minimum extent such that the remaining provisions
            of Terms will continue in full force and effect.
          </p>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl lg:text-3xl xl:text-4xl font-semibold text-gray-800 mb-5 lg:mb-6 xl:mb-7.5 pb-2 lg:pb-2.5 xl:pb-3 border-b-2 border-teal-500">
            Assignment
          </h2>
          <p className="mb-4 text-gray-700 text-base lg:text-lg xl:text-lg leading-relaxed">
            Gulooloo Tech may assign the Agreements, and any of its rights under
            the Agreements, in whole or in part, and we may delegate any of its
            obligations under the Agreements.
          </p>

          <p className="mb-4 text-gray-700 text-base lg:text-lg xl:text-lg leading-relaxed">
            You may not assign the Agreements, in whole or in part, nor transfer
            or sub-license your rights under the Agreements, to any third party.
          </p>
        </div>

        <div className="bg-gray-50 px-7.5 py-12.5 rounded-lg text-center mt-17.5">
          <h3 className="text-gray-800 mb-6 text-xl">
            Questions About These Terms?
          </h3>
          <p className="mb-7.5 text-lg text-gray-700">
            If you have any questions or suggestions about these Terms of
            Service, please contact us:
          </p>
          <a
            href="mailto:support@guloolootech.com"
            className="inline-block bg-teal-500 text-white px-6 py-3 no-underline rounded-full font-medium transition-colors duration-300 hover:bg-teal-600"
          >
            Contact Us
          </a>
        </div>
      </div>
      <ScrollToTopButton></ScrollToTopButton>
    </div>
  );
}
