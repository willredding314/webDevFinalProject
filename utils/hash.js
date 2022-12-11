import bcrypt from "bcryptjs";

export const hashPassword = async (password) => {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
}
// export const comparePassword = (password, hash) => {
//     bcrypt.compare(password, hash, (err, res) => {
//         return res;
//     })
// }
