import { FeaturedCandidate, FeaturedCandidateTC } from '../models/featuredCandidate.js'

export const FeaturedCandidateQuery = {
    featuredCandidateById: FeaturedCandidateTC.getResolver('findById'),
    featuredCandidateByIds: FeaturedCandidateTC.getResolver('findByIds'),
    featuredCandidateOne: FeaturedCandidateTC.getResolver('findOne'),
    featuredCandidateMany: FeaturedCandidateTC.getResolver('findMany'),
    featuredCandidateCount: FeaturedCandidateTC.getResolver('count'),
    featuredCandidateConnection: FeaturedCandidateTC.getResolver('connection'),
    featuredCandidatePagination: FeaturedCandidateTC.getResolver('pagination'),
};

export const FeaturedCandidateMutation = {
    featuredCandidateCreateOne: FeaturedCandidateTC.getResolver('createOne'),
    featuredCandidateCreateMany: FeaturedCandidateTC.getResolver('createMany'),
    featuredCandidateUpdateById: FeaturedCandidateTC.getResolver('updateById'),
    featuredCandidateUpdateOne: FeaturedCandidateTC.getResolver('updateOne'),
    featuredCandidateUpdateMany: FeaturedCandidateTC.getResolver('updateMany'),
    featuredCandidateRemoveById: FeaturedCandidateTC.getResolver('removeById'),
    featuredCandidateRemoveOne: FeaturedCandidateTC.getResolver('removeOne'),
    featuredCandidateRemoveMany: FeaturedCandidateTC.getResolver('removeMany'),
}
