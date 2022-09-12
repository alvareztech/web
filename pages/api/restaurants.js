let restaurants = [
  {
    name: 'Restaurant 1',
    phone: 87654321
  },
  {
    name: 'Restaurant 2',
    phone: 87654321
  },
  {
    name: 'Restaurant 3',
    phone: 87654321
  }
]

export default function handler(req, res) {
  res.status(200).json({ 'restaurants': restaurants })
}
