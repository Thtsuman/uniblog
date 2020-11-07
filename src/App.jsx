import React from "react"
import "./tailwind.output.css"
import "simplebar/dist/simplebar.min.css"
import "./styles/main.css"
import SimpleBar from "simplebar-react"

const sidebarContent = [
	{ name: "Home", icon: "", link: "" },
	{ name: "Following", icon: "", link: "" },
	{ name: "Posts", icon: "", link: "" },
	
]

const App = () => {
	return (
		<div className="grid grid-cols-2 md:grid-cols-4 bg-gray-900 text-gray-200">
			<div className="sidebar col-span-1 h-screen px-2">
				<div className="flex flex-col justify-between h-full ">
					<div>
						<div className="p-2 my-2 cursor-pointer flex items-center">
							<i class="bx bxs-message-detail bx-sm mr-2"></i>
							<div className='text-2xl '>UniBlog</div>
						</div>
						<SimpleBar style={{ maxHeight: "80vh" }}>
							{sidebarContent.map((item, i) => (
								<div
									key={i}
									className="h-100 px-2 py-2 my-1 hover:bg-gray-800 rounded-lg hover:shadow-inner cursor-pointer transition duration-300 ease-in-out"
								>
									<p>{item.name}</p>
								</div>
							))}
						</SimpleBar>
					</div>
					<div className="bg-gray-800 mb-2 px-2 py-3 rounded-lg">
						<i class="bx bx-user p-2 bg-gray-900 rounded-full mr-2 shadow-lg"></i>
						Thtsuman.
					</div>
				</div>
			</div>
			<div className="col-span-2 bg-gray-900 px-3 my-3 shadow-lg z-10">Hello</div>
		</div>
	)
}

export default App
