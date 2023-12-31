import { useState, useContext, FormEvent } from "react";
import { ToggleButton } from "../../components/toggleButton";
import { useDispatch } from 'react-redux'
import { UserContext, CredentialsInterface } from "../../contexts/UserContext";
import { UwcFetchToJSON } from "../../utils/Fetcher";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Login() {
  const navi = useNavigate();
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isInvalidCred, setInvalidCred] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const {
    rememberMe,
    setRememberMe,
    setPhone,
    setUserId,
    setUsername,
    setUserEmail,
    setUserRole,
    setAccessToken,
    setRefreshToken,
  } = useContext<CredentialsInterface>(UserContext);

  const HandleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    setLoading(true);

    UwcFetchToJSON("/auth/login", "POST", {
      email: email,
      password: password,
    })
      .then((resp) => {
        if (resp === undefined) {
          setInvalidCred(true);
        } else {
          setInvalidCred(false);
          setAccessToken(resp["accessToken"]);
          setRefreshToken(resp["refreshToken"]);
          setUserRole(resp["role"] === "back officer" ? "admin" : "user");
          setUserEmail(email);

          navi("/home");
        }
      })
      .catch((error) => {
        console.log(error);
        setInvalidCred(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="flex h-screen w-full items-center justify-center bg-indigo-700">
      <div
        className={
          "window flex h-4/5 basis-4/5 w-full flex-row gap-3 bg-white p-4 outline outline-0 outline-offset-4 outline-red-500 transition-all md:w-2/5 " +
          (isInvalidCred ? "outline-4" : "")
        }
      >
        <form className="flex basis-1/2 h-full flex-col gap-1 justify-between" onSubmit={HandleSubmit}>
          <img src="/cube-run.png" className="object-scale-down items-center h-24"></img>
          <div className="text-lg text-indigo-800 italic font-bold">Email</div>
          <input
            className="input"
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setInvalidCred(false);
            }}
            required
          />
          <div className="text-lg text-indigo-800 italic font-bold">Password</div>
          <input
            className="input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setInvalidCred(false);
            }}
            required
          />
          <div className="flex flex-col items-center justify-between">
            <div className="grow">
                <ToggleButton
                  toggleHeight="2rem"
                  label="Remember Me"
                  callback={() => {
                    setRememberMe(!rememberMe);
                  }}
                />
            </div>
          </div>
          <div className="flex flex-col items-center justify-between">
            <button
                type="submit"
                className="w-3/5 bg-indigo-700 text-white"
                disabled={isLoading}
              >
                Login
            </button>
          </div>
          <a className="flex flex-col items-center justify-between grow underline text-indigo-700"
              href="./password"
              onClick={() => {navi("./password")}}>
              Forgot Password
          </a>
          <a className="flex flex-col items-center justify-between grow underline text-indigo-700"
              href="./signup"
              onClick={() => {navi("./signup")}}>
              Haven't got an account yet?
          </a>
        </form>
        <div className="flex basis-1/2 w-full h-full">
          <img
            src="/Rectangle 313.png"
            className="h-full w-full grow object-cover object-center rounded-lg tall:block"
          ></img>
        </div>
      </div>
    </div>
  );
}