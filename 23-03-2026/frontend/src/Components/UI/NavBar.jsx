function NavBar() {
  return (
    <div className="flex justify-between items-center pt-5 px-5">
      
      <div className="flex gap-2">
        <div>Logo</div>
        <div>JCBM College</div>
      </div>

      <div className="flex gap-5">
        <div>Home</div>
        <div>Service</div>
        <div>Contact us</div>
        <div>About us</div>
      </div>

      <div className="flex gap-4">
        <div>Sign-up</div>
        <div>Login</div>
      </div>

    </div>
  );
}

export default NavBar;