import User from "../../../models/UserModel"
import jwt from 'jsonwebtoken';

const generateTokens = (payload:any) => {
	const { id, username } = payload

	// Create JWT
	const accessToken = jwt.sign(
		{ id, username },
		process.env.ACCESS_TOKEN_SECRET || "",
		{
			expiresIn: '5m'
		}
	)

	const refreshToken = jwt.sign(
		{ id, username },
		process.env.REFRESH_TOKEN_SECRET || "",
		{
			expiresIn: '1h'
		}
	)

	return { accessToken, refreshToken }
}

const updateRefreshToken = async (username:any, refreshToken:string, email:any) => {
	const emailLogin = await User.find((user:any) => user.email === username)

	const users = await emailLogin.map((user) :any => {
		if (user.username === username)
			return {
				...emailLogin,
				refreshToken
			}

		return users
	})
}

export const POST = async (request: any) => {
    const {username, password, email} = await request.json()
	const userLogin = User.find((user:any) => user.username === username)
	const emailLogin = User.find((user:any) => user.email === email)

	if (!emailLogin || !userLogin) return new Response(JSON.stringify({message: "tài khoản đã tồn tại"}), {status: 401})

	const tokens = generateTokens(userLogin || emailLogin);
	updateRefreshToken(username, tokens.refreshToken, email)

	return new Response(JSON.stringify(tokens), {status: 201})
}
