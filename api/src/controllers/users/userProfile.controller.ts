import { Request, Response } from "express";
import { userProfileService } from "../../services/users/userProfile.service";

export const userProfileController = async (req: Request, res: Response) => {
  const profile = await userProfileService(req.user);

  return res.json(profile);
};
