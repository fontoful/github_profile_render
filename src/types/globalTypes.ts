// interface UserProps {
//   image?: string;
//   name: string;
//   nickname?: string;
//   description?: string;
//   url?: string;
// }
type UserDataKeys = 'name' | 'url' | 'nickname' | 'image'

export type UserData = Record<UserDataKeys, string>

// this will make sure it's re-using all the other keys except the specified one which is getting overriden
export type GithubUser = Omit<UserData, 'image' | 'url'> & {
  'avatar_url': string
  'html_url': string
}

