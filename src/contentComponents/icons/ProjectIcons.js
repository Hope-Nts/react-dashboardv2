import React from "react";
import { withBaseIcon } from "react-icons-kit";

//import icons with the code from the site here
import { search } from "react-icons-kit/icomoon/search";
import { statsBars } from "react-icons-kit/icomoon/statsBars";
import { ic_notifications } from "react-icons-kit/md/ic_notifications";
import { newspaper } from "react-icons-kit/icomoon/newspaper";
import { info } from "react-icons-kit/icomoon/info";
import { coinDollar } from "react-icons-kit/icomoon/coinDollar";
import { cog } from "react-icons-kit/icomoon/cog";
import { profile } from "react-icons-kit/icomoon/profile";
import { creditCard } from "react-icons-kit/icomoon/creditCard";
import { ic_expand_more } from "react-icons-kit/md/ic_expand_more";

//this is the global styling for all icons in the app
const NavigationContainer = withBaseIcon({
  size: 25,
  style: { colour: "var(--main-grey)" },
});

export const ExpandMoreIcon = () => (
  <NavigationContainer icon={ic_expand_more} />
);

export const SearchIcon = () => <NavigationContainer icon={search} />;
export const NotificationIcon = () => (
  <NavigationContainer icon={ic_notifications} />
);
export const BarGraphIcon = () => <NavigationContainer icon={statsBars} />;
export const ReportIcon = () => <NavigationContainer icon={newspaper} />;
export const InfoIcon = () => <NavigationContainer icon={info} />;
export const LoanIcon = () => <NavigationContainer icon={coinDollar} />;
export const SettingsIcon = () => <NavigationContainer icon={cog} />;
export const ProfileIcon = () => <NavigationContainer icon={profile} />;
export const CreditIcon = () => <NavigationContainer icon={creditCard} />;
