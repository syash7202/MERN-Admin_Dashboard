import { Data } from "../models/data.model.js";
import { asyncHandler } from "../utils/asynHandler.js";

const userData = asyncHandler(async (req, res) => {
  try {
    const { intensity } = req.params;
    const data = await Data.find(intensity);

    if (!data) {
      throw new ApiError(400, "Kindly provide intensity");
    }

    return res.status(200).json(
      new ApiResponse(
        200,
        {
          data: data,
        },
        "data found successfully !"
      )
    );
  } catch (error) {
    throw new ApiError(401, error?.message || "can't fetcch data !");
  }
});

export { userData };
