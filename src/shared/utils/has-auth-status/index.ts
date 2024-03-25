import {useAppSelector} from "../../../app/app-store";
import {AuthorizationStatus} from "../../config";

export const hasAuthStatus = () => {
  const authorizationStatus = useAppSelector((state) => state.client.authorizationStatus);
  return authorizationStatus === AuthorizationStatus.Auth
}
