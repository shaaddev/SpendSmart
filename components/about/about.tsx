import { AboutFeaturesProps } from "@/lib/info"

export function AboutPage({data}: {data: AboutFeaturesProps[]}) {
  return(
    <div className="min-h-96 mt-10 md:mt-48 flex flex-col justify-center items-center w-full">
      <h1 className="text-2xl md:text-4xl font-bold mb-5 text-center lg:text-left">Powerful Features to Manage Your Finances</h1>
      <p className="w-full lg:w-3/5 text-center mb-10">SpendSmart offers a comprehensive set of tools to help you take control of your finances and achieve your financial goals.</p>
      <div className="flex flex-col lg:grid lg:grid-cols-3 gap-12 items-start justify-center">
        {data.map((f: AboutFeaturesProps, index: number) => (
          <div key={index} className="text-center lg:text-left">
            <div className="inline align-middle">{f.icon} <h2 className="inline align-middle font-bold">{f.title}</h2></div>
            <p className="mt-5 opacity-50 font-medium text-left">{f.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}