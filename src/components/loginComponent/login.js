


export const Login = () => {

  return (
    <>
      <form>
        <label for="fname">First Name</label>
        <input type="text" id="fname" name="fname"/>
        <br/>
        <label for="fpass">Last Name</label>
        <input type="password" id="fpass" name="fpass"/>
        <input type="submit" value="Submit"/>
      </form>
    </>
  )
}