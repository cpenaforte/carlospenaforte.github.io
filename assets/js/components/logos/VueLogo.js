export default Infimo.default.defineComponent({
    name: "VueLogo",
    props: {
        width: {
            type: Number,
            default: 24
        },
        height: {
            type: Number,
            default: 24
        }
    },
    template: `
        <a title="Vue.js" href="https://vuejs.org/" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" :width="width" :height="height" class="drop-shadow-[0_0_1px_rgba(255,255,255,0.5)]" viewBox="0 0 261.76 226.69">
                <g transform="matrix(1.3333 0 0 -1.3333 -76.311 313.34)">
                    <g transform="translate(178.06 235.01)">
                        <path d="m0 0-22.669-39.264-22.669 39.264h-75.491l98.16-170.02 98.16 170.02z" fill="#41b883"/>
                    </g>
                    <g transform="translate(178.06 235.01)">
                        <path d="m0 0-22.669-39.264-22.669 39.264h-36.227l58.896-102.01 58.896 102.01z" fill="#34495e"/>
                    </g>
                </g>
            </svg>
        </a>
    `
});