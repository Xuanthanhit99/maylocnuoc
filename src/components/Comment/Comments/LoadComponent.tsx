import moment from "moment"

export const LoadComments = ({ comments } : any) => {
    return comments
      .sort((a: any, b: any) =>
        a.time.toDate().getTime() > b.time.toDate().getTime() ? -1 : 1
      )
      .map((item: any) => (
        <div
          key={item.time.seconds}
          className="border dark:border-gray-500 w-full mt-5 flex flex-col rounded-md bg-white"
        >
          <span className="text-lg px-4 text-white dark:text-gray-300 font-medium bg-black h-14 flex items-center">
            {item.name} &middot; {moment(item.time.toDate().toDateString()).format('DD/MM/YYYY - h:mm:ss a')}
          </span>
          <span className="mt-3 p-3 text-md text-black dark:text-gray-300 text-sm">
            {item.content}
          </span>
        </div>
      ))
  }