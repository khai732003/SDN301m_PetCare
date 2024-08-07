import { Service } from "../models";
import { TPagination } from "../types/pagination";
import { IService } from "../types/service";
import { paginate } from "../utils/paginationExtension";

export const getAll = (options: any): Promise<TPagination<IService>> => {
  return paginate(Service, options);
};

export const getOne = async (id: string): Promise<IService | null> => {
  try {
    const service = await Service.findById(id).exec();
    return service;
  } catch (error) {
    console.error("Error fetching service:", error);
    return null;
  }
};

export const insertOne = (data: IService): Promise<IService> => {
  const newService = new Service(data);
  return newService.save();
};

export const updateOne = (
  id: string,
  data: Partial<IService>
): Promise<IService | null> => {
  return Service.findByIdAndUpdate(id, data, { new: true });
};

export const deleteOne = (id: string) => {
  return Service.deleteOne({ _id: id });
};
