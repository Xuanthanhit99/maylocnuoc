import jwt from 'jsonwebtoken';
interface JwtPayload {
    id: string;
}
const verifyToken = ({req, res, next} :any) => {
	const authHeader = req.header('Authorization')
	const token = authHeader && authHeader.split(' ')[1]

	if (!token) return res.sendStatus(401)

	try {
		const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET || "") as JwtPayload

		req.userId = decoded.id
		next()
	} catch (error) {
		console.log(error)
		return res.sendStatus(403)
	}
}

module.exports = verifyToken