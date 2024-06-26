import axios from "axios";

const upload = async (file) => {
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", "e-store");
  try {
    const res = await axios.post(
      process.env.CLOUDINARY_URL,
      data
    );
    const { url } = res.data;
    return url;
  } catch (err) {
    console.log(err);
  }
};

export default upload;