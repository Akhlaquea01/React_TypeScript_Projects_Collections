import React from 'react'

function ErrorPage() {
    return (
        <div className="p-4 bg-gray-100 text-gray-800 border border-gray-300 rounded-md">
            <h2 className="text-lg font-semibold">Page Not Found</h2>
            <p>Sorry, the page you are looking for does not exist.</p>
        </div>
    )
}

export default ErrorPage