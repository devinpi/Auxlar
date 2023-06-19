const people = [
    {
      name: 'Jaskeerat Singh',
      role: 'Co-Founder / CEO',
    //   imageUrl:
    //     'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Devinder Singh',
        role: 'Co-Founder / CTO',
      //   imageUrl:
      //     'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    // More people...
  ]
  
  export default function Example() {
    return (
      <div id="contact" className="bg-white py-12 sm:py-15 justify-center">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-[#202020] sm:text-4xl">Contact Us</h2>
            <p className="mt-6 text-lg leading-8 text-[#202020]">
                contact@auxlar.com
            </p>
            <p className="mt-6 text-lg leading-8 text-[#202020]">
                Toronto, Canada
            </p>
          </div>
        </div>
      </div>
    )
  }

//   <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
//   {people.map((person) => (
//     <li key={person.name}>
//       <div className="flex items-center gap-x-6">
//         {/* <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" /> */}
//         <div>
//           <h3 className="text-base font-semibold leading-7 tracking-tight text-[#202020]">{person.name}</h3>
//           <p className="text-sm font-semibold leading-6 text-[#29AABB]">{person.role}</p>
//         </div>
//       </div>
//     </li>
//   ))}
// </ul>