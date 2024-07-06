import { HomeBtn } from "./home-btn"

export function HomePage(){
  return(
    <div className="min-h-96 flex flex-col lg:grid  justify-center text-center items-center w-full">
      <div>
        <h1 className="text-3xl md:text-6xl font-bold mb-5">Take Control of Your Finances with SpendSmart</h1>
        <p className="mb-5">SpendSmart is the ultimate finance tracking app that helps you manage your budget, track expenses, and gain insights into your
          spending habits.
        </p>
        <HomeBtn />
      </div>
    </div>
  )
}