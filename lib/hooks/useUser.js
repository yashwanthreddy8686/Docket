import AccountService from "services/AccountService";

export default function useUser() {
  const user = AccountService.getUserInfo();

  return user;
}
