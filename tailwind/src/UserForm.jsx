function UserForm(){
    return(
        <>
        <p className="text-orange-500">user-form</p>
        <container>
            <input type="text" placeholder="please enter your Name" className="bg-red-600 text-white"/>
            <input type="number" placeholder="enter your phone Number" className="bg-green-600 text-white"/>
            <input type="text" placeholder="please enter your Email" className="bg-blue-600 text-white"/>
            <select name="enter grade">
                <option value="grade a">A</option>
                <option value="grade b">B</option>
                <option value="grade c">C</option>
                <option value="grade d">D</option>
            </select>
            <button className="bg-green-500 boarder-px boader-none cursor-pointer">Submit</button>
        </container>
        </>
    )
}
export default UserForm