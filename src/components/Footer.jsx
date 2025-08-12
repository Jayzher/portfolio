export default function Footer() {
    return (
        <div className="flex justify-center">
            <footer className="w-full bg-primary text-secondary border-t border-primary p-6 text-center">
                <p className="text-sm"> {new Date().getFullYear()} My 3D Portfolio. All rights reserved.</p>
            </footer>
        </div>
    )
}