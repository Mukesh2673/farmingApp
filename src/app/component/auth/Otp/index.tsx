import { useState, ChangeEvent } from "react";
import "@/app/component/auth/Otp/style.css";
interface OtpProps {
  onSave: (save: Boolean) => void;
}

const OTPVerification: React.FC<OtpProps> = ({onSave}) => {
  const [otp, setOtp] = useState<string[]>(["", "", "", ""]);

  const handleChange = (value: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 3) {
      const nextInput = document.getElementById(`otp-${index + 1}`) as HTMLInputElement;
      if (nextInput) {
        nextInput.focus(); // Move to next input
      }
    }
  };
  const verify=()=>{
    onSave(true)

  }
  // Check if all OTP fields are filled
  const isButtonDisabled = otp.some((digit) => digit === "");
  return (
    <div className="container otp">
      <header className="header">
        <i className="bx bxs-check-shield"></i>
      </header>
      <h3 className="title">Enter OTP Code</h3>
      <form action="#" className="form">
        <div className="inputField otp">
          {otp.map((digit, index) => (
            <input
              key={index}
              id={`otp-${index}`}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e.target.value, index)}
              className="input"
              autoFocus={index === 0}
            />
          ))}
        </div>
        <button className="button" type="submit" disabled={isButtonDisabled} onClick={verify}>
          Verify OTP
        </button>
      </form>
    </div>
  );
};

export default OTPVerification;
