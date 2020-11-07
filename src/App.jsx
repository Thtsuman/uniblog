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

const blogs = [
	{
		title: "Title",
		content:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam sapiente cum maxime repudiandae architecto expedita aut nobis recusandae, aspernatur enim culpa itaque odio saepe iusto quae, rerum adipisci?",
		image_url:
			"https://images.unsplash.com/photo-1604608678051-64d46d8d0ffe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
		is_liked: true,
	},
	{
		title: "Title",
		content:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam sapiente cum maxime repudiandae architecto expedita aut nobis recusandae, aspernatur enim culpa itaque odio saepe iusto quae, rerum adipisci?",
		is_liked: false,
	},
	{
		title: "Title",
		content:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam sapiente cum maxime repudiandae architecto expedita aut nobis recusandae, aspernatur enim culpa itaque odio saepe iusto quae, rerum adipisci?",
		image_url:
			"https://images.unsplash.com/photo-1604608678051-64d46d8d0ffe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
		is_liked: true,
	},
	{
		title: "Title",
		content:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam sapiente cum maxime repudiandae architecto expedita aut nobis recusandae, aspernatur enim culpa itaque odio saepe iusto quae, rerum adipisci?",
		image_url:
			"https://images.unsplash.com/photo-1604608678051-64d46d8d0ffe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
		is_liked: true,
	},
	{
		title: "Title",
		content:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam sapiente cum maxime repudiandae architecto expedita aut nobis recusandae, aspernatur enim culpa itaque odio saepe iusto quae, rerum adipisci?",
		is_liked: true,
	},
	{
		title: "Title",
		content:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam sapiente cum maxime repudiandae architecto expedita aut nobis recusandae, aspernatur enim culpa itaque odio saepe iusto quae, rerum adipisci?",
		image_url:
			"https://images.unsplash.com/photo-1604608678051-64d46d8d0ffe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
		is_liked: true,
	},
	{
		title: "Title",
		content:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam sapiente cum maxime repudiandae architecto expedita aut nobis recusandae, aspernatur enim culpa itaque odio saepe iusto quae, rerum adipisci?",
		is_liked: true,
	},
]

const App = () => {
	return (
		<div className="grid grid-cols-2 md:grid-cols-4 bg-gray-900 text-gray-200">
			<div className="sidebar col-span-1 h-screen px-2">
				<div className="flex flex-col justify-between h-full ">
					<div>
						<div className="p-2 my-2 cursor-pointer flex items-center">
							<i class="bx bxs-message-detail bx-sm mr-2"></i>
							<div className="text-2xl ">UniBlog</div>
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
			<div className="col-span-2 bg-gray-900 p-3 shadow-lg z-10 h-screen">
				<SimpleBar style={{ maxHeight: "95vh" }}>
					{blogs.map((blog, i) => (
						<div className="bg-gray-900 border border-gray-800 p-4 rounded-lg hover:shadow-xl shadow-md transition duration-300 ease-in-out my-3">
							<div className="text-2xl mb-2">{blog.title}</div>
							<p className="text-gray-500">{blog.content}</p>
							<div className="my-4">
								{blog.image_url && (
									<img className="h-32 w-full object-cover rounded-lg shadow-xl" src={blog.image_url} alt="" />
								)}
							</div>
							<div className="flex justify-between mt-5">
								<div className="hover:text-pink-500 cursor-pointer transition duration-300 ease-in-out">
									{blog.is_liked ? (
										<div className="text-pink-500 items-center flex">
											<i class='mr-2 bx bxs-heart text-xl'></i>
											Unlike
										</div>
									) : (
										<div className="items-center flex">
											<i class="mr-2 bx bxs-heart text-xl"></i>
											Like
										</div>
									)}
								</div>
								<div className="flex items-center hover:text-blue-400 cursor-pointer transition duration-300 ease-in-out">
									Share
									<i class="bx bxs-navigation ml-2"></i>
								</div>
							</div>
						</div>
					))}
				</SimpleBar>
			</div>
		
      <div className="col-span-1 h-screen p-3">
        <div className="text-gray-400">
          Trending
        </div>
      </div>
    </div>
	)
}

export default App
