import client from "@sanity/client";
import config from "./config";

//ctrl + space to import 
export default client({
    projectId:config.projectId,
    dataset:config.dataset,
    useCdn:true
})