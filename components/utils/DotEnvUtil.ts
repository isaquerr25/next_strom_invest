export default class DotEnvUtil {
	public static apolloConfig = () => {
		const baseUrl = process.env.REACT_APP_APOLLO_BASE_URL as string;
		const uri = process.env.REACT_APP_APOLLO_URI as string;

		return {
			baseUrl,
			uri,
			url: `${baseUrl}${uri}`,
		};
	};
}
