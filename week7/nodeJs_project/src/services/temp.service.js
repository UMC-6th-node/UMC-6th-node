import { tempResponseDto } from "../dtos/temp.response.dto";

export const getTempData = () => {
  return tempResponseDto("This is Test! >.0");
}