function Nav(){
    return(
        <>
            <nav className='grid grid-cols-3 w-full justify-items-center items-center gap-8 py-3'>
                <div className='text-xl'>logo</div>
                <div className='flex gap-5'>
                    <p>Workshop</p>
                    <p>Courses</p>
                </div>
                <div>
                    <button>Enroll</button>
                </div>
            </nav>
        </>
    )
}
export default Nav