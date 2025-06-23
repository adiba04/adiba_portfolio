'use client'
export default function AdibaComponent() {
const handleSchoolClick = () => {
window.open("https://uponthewordss.blogspot.com/?m=1&fbclid=PAQ0xDSwLGI7hleHRuA2FlbQIxMQABp-RHyUVW_qtxZddfan70kh9w9-Y6R7lhYpYBc4KPwV0H9BCgH1a0tEaFoa6y_aem_v7R2hG0A6HlA1qoaQza0FA", "_blank");
};

return (
<div className="bg-gradient-to-b from-white via-pink-100 to-pink-50 p-8 min-h-screen flex flex-col items-center justify-center">
<h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">Adiba</h1>
<button
onClick={handleSchoolClick}
className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-full transition-colors duration-200"
>
Blogs
</button>
</div>
);
}