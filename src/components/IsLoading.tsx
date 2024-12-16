import { Spinner } from "@chakra-ui/react";

interface IsLoadingProps {
    isLoading: boolean;
}

const IsLoading = ({ isLoading }: IsLoadingProps) => {

    if (isLoading){
        return <Spinner size='lg' className='spinner' />
    }
};

export default IsLoading;