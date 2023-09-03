import { LucideProps, User } from "lucide-react";

export const Icons = {
  user: User,
  logo: (props: LucideProps) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="60"
      height="61"
      viewBox="0 0 60 61"
      fill="none"
    >
      <mask
        id="mask0_102_128"
        style={{ maskType: "luminance" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="60"
        height="61"
      >
        <path d="M0 0.27063H59.8847V60.5617H0V0.27063Z" fill="white" />
      </mask>
      <g mask="url(#mask0_102_128)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.0373 49.7127L12.7207 50.39L12.7884 50.4577C14.9127 52.6558 14.888 56.2024 12.7207 58.3697C10.5472 60.5432 7.00686 60.5617 4.80874 58.4374L4.74102 58.3697L4.05757 57.6924L2.1981 55.8268C0.00614976 53.6348 0.00614976 50.0452 2.1981 47.8471C4.39006 45.649 7.98585 45.649 10.1778 47.8471L12.0373 49.7127ZM49.6638 18.8283L51.0861 17.406L58.0375 10.4484C60.2295 8.25647 60.2295 4.66684 58.0375 2.46257C55.8394 0.270615 52.2498 0.270615 50.064 2.46257L43.1064 9.42633L37.7004 14.8323C35.5084 17.0304 35.5084 20.6201 37.7004 22.8182L50.1132 35.231C52.3052 37.423 55.8948 37.423 58.0929 35.231C60.2849 33.0391 60.2849 29.4433 58.0929 27.2513L50.378 19.5303L49.6638 18.8283ZM2.51828 2.51798V2.51183C4.71023 0.319872 8.30602 0.319872 10.498 2.51183L57.9883 50.039C60.1864 52.231 60.1864 55.8268 57.9883 58.0187C55.7963 60.2169 52.2067 60.2169 50.0086 58.0187L2.51828 10.4915C0.326323 8.29957 0.326323 4.70994 2.51828 2.51798ZM2.45055 25.2687C4.6425 23.0768 8.22598 23.0768 10.4302 25.2687L15.8362 30.6809L27.5349 42.3918L35.2498 50.1068C37.4418 52.2987 37.4418 55.8945 35.2498 58.0865C33.0517 60.2846 29.4621 60.2846 27.2701 58.0865L19.5613 50.3715L7.85655 38.6606L2.45055 33.2546C0.258594 31.0565 0.258594 27.4607 2.45055 25.2687Z"
          fill="#724faf"
        />
      </g>
    </svg>
  ),
  google: (props: LucideProps) => (
    <svg {...props} viewBox="0 0 24 24">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
      <path d="M1 1h22v22H1z" fill="none" />
    </svg>
  ),
};