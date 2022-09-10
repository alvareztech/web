export function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function getColor(tag) {
  switch (tag) {
    case "android":
    case "androidx":
    case "espresso":
    case "retrofit":
    case "aab":
    case "apk":
      return "bg-green-500"
    case "ios":
    case "facebook":
      return "bg-blue-500"
    case "angular":
    case "java":
    case "javafx":
    case "hms":
      return "bg-red-500"
    case "kotlin":
      return "bg-purple-500"
    case "firebase":
      return "bg-yellow-500"
    case "swift":
    case "swiftui":
    case "ubuntu":
      return "bg-orange-500"
  }
  return "bg-gray-500"
}
