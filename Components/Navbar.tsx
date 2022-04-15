import Image from 'next/image'

const SideBar: React.FC = () => {
  return (
    <div className="border-grey-300 rounded-md border bg-white  shadow">
      <div className="m-auto flex w-[90%] items-center justify-between p-2">
        <Image src="/images/logo.png" alt="logo" width={55} height={55} />
        <ul className="hidden justify-around  sm:flex">
          <li>
            <a
              href="https://www.who.int/health-topics/coronavirus#tab=tab_3"
              className="rounded-md  px-4 py-2 text-sm font-semibold text-gray-800"
            >
              Symptoms
            </a>
          </li>
          <li>
            <a
              href="https://www.who.int/news-room/questions-and-answers/item/coronavirus-disease-covid-19-how-is-it-transmitted"
              className="rounded-md  px-4 py-2 text-sm font-semibold text-gray-800"
            >
              Preventions
            </a>
          </li>
          <li>
            <a
              href="https://github.com/trafargarlaw/covid-tracker-next-tailwind-isr"
              className="rounded-md  px-4 py-2 text-sm font-semibold text-gray-800"
            >
              FAQs
            </a>
          </li>
          <li>
            <a
              href="https://github.com/trafargarlaw/covid-tracker-next-tailwind-isr"
              className="rounded-md  px-4 py-2 text-sm font-semibold text-gray-800"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="https://github.com/trafargarlaw/covid-tracker-next-tailwind-isr"
              className="rounded-md bg-blue-500 px-4 py-2 text-sm font-semibold text-gray-100"
            >
              Code on github
            </a>
          </li>
        </ul>
        <button className="space-y-1 sm:hidden">
          <span className="block h-1 w-6 bg-slate-700"></span>
          <span className="block h-1 w-6 bg-slate-700"></span>
          <span className="block h-1 w-6 bg-slate-700"></span>
        </button>
      </div>
    </div>
  )
}

export default SideBar
