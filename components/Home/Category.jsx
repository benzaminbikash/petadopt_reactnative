import { View, Text, FlatList, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { db } from "../../configure/FirebaseConfigure";

import CategoryRender from "./CategoryRender";
import PetItem from "./PetItem";

const Category = () => {
  const [category, setCategory] = useState([]);
  const [selectCategory, setSelectCategory] = useState("Cats");
  const [filterCategory, setFilterCategory] = useState([]);

  const fetchCategory = async () => {
    const snap = await getDocs(
      query(collection(db, "category"), orderBy("name", "asc"))
    );
    const data = snap.docs.map((item) => item.data());
    setCategory(data);
  };
  useEffect(() => {
    fetchCategory();
  }, []);

  const fetchCategoryAnimal = async () => {
    const q = query(
      collection(db, "Pets"),
      where("category", "==", selectCategory)
    );
    const snap = await getDocs(q);
    const data = snap.docs.map((item) => item.data());
    setFilterCategory(data);
  };
  useEffect(() => {
    fetchCategoryAnimal();
  }, [selectCategory]);
  return (
    <View>
      <View>
        <Text
          style={{ fontFamily: "outfitbold", fontSize: 17, marginVertical: 2 }}
        >
          Category
        </Text>
        <FlatList
          ItemSeparatorComponent={() => <View style={{ width: 14 }}></View>}
          horizontal={true}
          data={category}
          renderItem={({ item }) => {
            return (
              <CategoryRender
                item={item}
                setSelectCategory={setSelectCategory}
                selectCategory={selectCategory}
              />
            );
          }}
        />
      </View>
      {/* category list */}
      <View>
        <FlatList
          style={{ marginTop: 10 }}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={filterCategory}
          renderItem={({ item }) => <PetItem item={item} />}
          ListEmptyComponent={() => (
            <View>
              <Text>No Data</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default Category;
