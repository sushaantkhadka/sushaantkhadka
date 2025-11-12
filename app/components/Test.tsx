import React from 'react'

export default function Test({ children }: { children?: React.ReactNode }) {
  return (
    <div className="w-[524px] h-[692px] rounded-2xl shadow-2xl bg-white border overflow-hidden">
{/* Inner scrollable area */}
<div className="h-full overflow-auto p-6 scrollbar-hide">
{children ?? <ExampleContent />}
</div>
</div>
  )
}

function ExampleContent() {
// Add the `mini-screen-scroll` class to enable the custom scrollbar rules above
return (
<div className="mini-screen-scroll  space-y-6 text-gray-800">
<header className="flex items-center justify-between">
<div>
<h3 className="text-lg font-semibold">Mini Screen</h3>
<p className="text-sm text-gray-500">524 × 692 px — outer frame hides overflow</p>
</div>
<div className="flex gap-2">
<span className="w-3 h-3 bg-red-400 rounded-full" />
<span className="w-3 h-3 bg-yellow-300 rounded-full" />
<span className="w-3 h-3 bg-green-400 rounded-full" />
</div>
</header>


{/* Long content to demonstrate scrolling */}
<section>
<h4 className="font-medium">Scrollable content</h4>
<p className="text-sm text-gray-600">This inner area is scrollable while the outer frame hides overflow — perfect for a mini device preview or a kiosk-like UI.</p>


<div className="mt-4 space-y-4">
{Array.from({ length: 18 }).map((_, i) => (
<article key={i} className="p-4 bg-gray-50 rounded-md border">
<h5 className="font-semibold">Item {i + 1}</h5>
<p className="text-sm text-gray-600 mt-1">Short description for this item so you can see the scroll behavior.</p>
</article>
))}
</div>
</section>


<footer className="pt-6 text-center text-xs text-gray-400">Powered by your Next.js app</footer>
</div>
);
}