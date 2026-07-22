import logo from "@/assets/logo.svg";

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <img src={logo} alt="CodeHire logo" className="h-8 w-8" />
      <h1 className="text-xl font-semibold">CodeHire</h1>
    </div>
  );
}

export default Logo;