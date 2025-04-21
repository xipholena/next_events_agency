type Props = {
    children: React.ReactNode
    isProfileDropdownOpen: boolean
    setIsProfileDropdownOpen: (boolean) => void
}
const ProfileDropdown = ({
    children,
    isProfileDropdownOpen,
    setIsProfileDropdownOpen,
}: Props) => {
    return (
        <div className={`${isProfileDropdownOpen ? 'sm:block' : 'sm:hidden'}`}>
            <button
                type="button"
                className="hidden sm:fixed sm:inset-0 sm:opacity-0 sm:w-full sm:h-full sm:cursor-default  sm:block sm:z-1"
                onClick={() => setIsProfileDropdownOpen(false)}
            />
            {children}
        </div>
    )
}
export default ProfileDropdown
