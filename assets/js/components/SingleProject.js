export default Infimo.default.defineComponent({
    name: "SingleProject",
    props: {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        image: {
            type: String,
            default: "assets/images/noImage.jpg"
        },
        github: {
            type: String,
            default: "#"
        }
    },
    template: `
        <div
            class="flex flex-col justify-center p-0 shadow-[0_0_4px_1px_rgba(0,0,0,0.2)] text-gray-900 select-none bg-gray-100 w-[360px] rounded-lg"
        >
            <figure class="shink-0 flex items-center justify-center w-full bg-gray-800 rounded-t-lg">
                <img :src="image" :alt="title" class="w-[150px] h-[150px] my-4 rounded-full">
            </figure>
            <h3 class="text-xl font-semibold text-gray-500 mt-4 mb-2 mx-6">{{ title }}</h3>   
            <p class="text-sm m-0 mx-6 h-[80px]">
                {{ description }}
            </p>
            <div class="flex items-center w-full px-6 py-4 mt-4 border-t border-gray-300">
                <a
                    :href="github"
                    target="_blank"
                    title="Click to access GitHub repository"
                    class="text-sm bg-[rgb(0,150,220)] text-white px-3 py-2 no-underline rounded-lg hover:bg-[rgb(50,160,240)] active:bg-[rgb(0,150,220)]"
                >
                    View on GitHub
                </a>
            </div>
        </div>
    `
});