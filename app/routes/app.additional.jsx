import {json} from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import {
  Box,Card, Layout,Link,List,Page, Text,BlockStack,} from "@shopify/polaris";
import {create} from "../controllers/SectionStore.js";
import Formdata from "../components/Formdata.jsx"

export const loader=()=>{
  return json({msg:"Success"})
}

export const action = async ({request})=>{
  const formdata= await request.formdata();
  const title=formdata.get("title");
  const description=formdata.get("description");

  try {
    const data=await create({title,description})
    console.log(data)
    return json(data)
    
  } catch (error) {
    console.log(error)
    return json(error)
  }

  // return json("Title :"+title + "Description :"+description);


}

export default function AdditionalPage() {
  const data = useLoaderData();

  return (
    <Page>
      <ui-title-bar title="Additional page" />
      <Layout>
       
          <Layout.Section>
            <Card>
              <BlockStack gap="300">{
              
              
              <Formdata/>
              
              
              
              }</BlockStack>
            </Card>
          </Layout.Section>
   
      </Layout>
    </Page>
  );
}